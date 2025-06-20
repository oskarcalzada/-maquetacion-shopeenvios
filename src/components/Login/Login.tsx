import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Terms from "./utils/Terms";
import Privacy from "./utils/Privacy";
import "../../assets/css/login.css";
import logo from "../../assets/img/logo.png";
import Box from "../../elements/Box";
import google from "../../assets/icons/google.svg";
import facebook from "../../assets/icons/facebook.svg";
import { IconButton } from "@mui/material";

function Login() {
    const navigate = useNavigate();
    const [currentView, setCurrentView] = useState<'signin' | 'signup'>('signin');

    /*===============================================
    CHECK IF USER IS ALREADY LOGGED IN
    =================================================*/
    useEffect(() => {
        if (localStorage.getItem('ltkn') !== null) {
            // User is already logged in, redirect to dashboard
            navigate('/dashboard', { replace: true });
        }
    }, [navigate]);

    /*===============================================
    STATE FOR DIALOGS
    =================================================*/
    const [termsOpen, setTermsOpen] = useState(false);
    const [privacyOpen, setPrivacyOpen] = useState(false);

    /*===============================================
    HANDLE FACEBOOK LOGIN
    =================================================*/
    const handleFacebookLogin = () => {
        console.log("Facebook login clicked");
        // Connect with your API to handle Facebook login
    };

    /*===============================================
    HANDLE GOOGLE LOGIN
    =================================================*/
    const handleGoogleLogin = () => {
        console.log("Google login clicked");
        // Connect with your API to handle Google login
    };

    // Show login form (the redirect happens in useEffect if user is already logged in)
    return (
        <div className="login-root">
            <div className="login-left">
                <div className="login-form-wrapper">
                    <Box className="login-box">
                        <div className="login-logo">
                            <img src={logo} alt="ShopeEnvíos Logo" />
                        </div>

                        {currentView === 'signup' ? (
                            <Signup 
                                onSigninClick={() => setCurrentView('signin')}
                            />
                        ) : (
                            <Signin 
                                onSignupClick={() => setCurrentView('signup')}
                            />
                        )}
                    </Box>

                    <div className="login-socials">
                        <span>Continuar con:</span>
                        <IconButton
                            className="login-social login-facebook"
                            aria-label="Facebook login"
                            onClick={handleFacebookLogin}
                        >
                            <img src={facebook} alt="Facebook" />
                        </IconButton>

                        <span>ó</span>
                        <IconButton
                            className="login-social login-google"
                            aria-label="Google login"
                            onClick={handleGoogleLogin}
                        >
                            <img src={google} alt="Google" />
                        </IconButton>
                    </div>
                </div>

                <footer className="login-footer">
                    <span>ShopeEnvíos Inc</span>
                    <a 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            setPrivacyOpen(true);
                        }}
                    >
                        Aviso de privacidad
                    </a>
                    <a 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            setTermsOpen(true);
                        }}
                    >
                        Términos y Condiciones
                    </a>
                </footer>
            </div>
            <div className="login-right">
                <div className="login-bg"></div>
            </div>

            {/* Terms and Privacy Dialogs */}
            <Terms 
                open={termsOpen} 
                onClose={() => setTermsOpen(false)} 
            />
            <Privacy 
                open={privacyOpen} 
                onClose={() => setPrivacyOpen(false)} 
            />
        </div>
    );
}

export default Login;
