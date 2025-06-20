import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";

const exampleResponse = {
    status: "success",
    message: "Login successful",
    ltkn: "exampleToken12345",
    user: {
        id: "12345",
        username: "exampleUser",
        email: "test@test.com",
        firstName: "Example",
        lastName: "User",
        role: "user"
    }
}

function Signin(props: any) {
    const { 
        onSignupClick
    } = props;
    
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    
    /*===============================================
    STATE FOR FORM VALUES
    =================================================*/
    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    });

    /*===============================================
    HANDLE FORM SUBMIT
    =================================================*/
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Simulate an API call
        console.log("Form submitted with values:", formValues);
        
        const response = exampleResponse; // Replace with actual API response
        if (response.status === "success") {
            console.log("Login successful:", response.user);
            // Store user data in localStorage or context
            localStorage.setItem('ltkn', JSON.stringify(response.ltkn));
            localStorage.setItem('user', JSON.stringify(response.user));
            enqueueSnackbar(response.message, { variant: 'success' });

            // Navigate to dashboard after successful login
            navigate('/dashboard');
        }
    };

    return (
        <form className="login-form" onSubmit={handleFormSubmit}>
            <TextField
                id="username"
                name="username"
                label="Usuario"
                placeholder="ejemplo123"
                autoComplete="username"
                fullWidth
                value={formValues.username}
                onChange={e => setFormValues({ ...formValues, username: e.target.value })}
            />
            <TextField
                id="password"
                name="password"
                label="Contraseña"
                type="password"
                placeholder="********"
                autoComplete="current-password"
                fullWidth
                value={formValues.password}
                onChange={e => setFormValues({ ...formValues, password: e.target.value })}
            />
            
            <Button type="submit" variant="contained" color="primary" fullWidth>
                INICIAR SESIÓN
            </Button>
            <Button 
                type="button" 
                variant="outlined" 
                color="secondary" 
                fullWidth
                onClick={onSignupClick}
            >
                CREAR CUENTA
            </Button>

            <a href="#" className="login-forgot">Olvide mi contraseña</a>
        </form>
    );
}

export default Signin;