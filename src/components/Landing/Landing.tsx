import { Button, Divider } from "@mui/material";
import logo from "../../assets/img/logo.png";
import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/image2.png";
import image3 from "../../assets/img/image3.png";
import prestashop from "../../assets/img/prestashop.png";
import shopify from "../../assets/img/shopify.png";
import woocommerce from "../../assets/img/woocommerce.png";
import "../../assets/css/landing.css";
import video1 from "../../assets/video/video1.mp4";
import video2 from "../../assets/video/video2.mp4";

import { CiUser } from "react-icons/ci";
import { CiCalculator1 } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";

import { CiMoneyBill } from "react-icons/ci";
import { BsReceiptCutoff } from "react-icons/bs";
import Partners from "./Partners";
import AnimatedMetrics from "./AnimatedMetrics";
import { useParallax } from "../../hooks/useParallax";
import { useInViewport } from "../../hooks/useInViewport";
import { useScrollProgress } from "../../hooks/useScrollProgress";


export default function Landing() {
  // Parallax refs with very subtle effects and limited movement (removed image1 and image3)
  const image2Ref = useParallax({ speed: 0.03, direction: 'down', maxOffset: 12 });
  const video1Ref = useParallax({ speed: 0.015, direction: 'up', maxOffset: 8 });
  const video2Ref = useParallax({ speed: 0.02, direction: 'down', maxOffset: 8 });

  // Viewport detection for animations
  const { elementRef: section1Ref, isInViewport: section1Visible } = useInViewport();
  const { elementRef: section2Ref, isInViewport: section2Visible } = useInViewport();
  const { elementRef: section3Ref, isInViewport: section3Visible } = useInViewport();
  
  // Scroll progress for indicator
  const scrollProgress = useScrollProgress();

  return (
    <div className="landing-container">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      <header>
        <div className="divcenter">
          <img src={logo} alt="Logo" className="landing-logo" />
          <Button
            variant="contained"
            color="primary"
            className="landing-button"
            href="/login"
          >
            Ir a la APP
          </Button>
        </div>
      </header>

      <div className="landing-main">
        <img 
          src={image1} 
          className="landing-image" 
          alt="ShopeEnvíos Platform" 
        />

        {/* SECTION 1 */}
        <section 
          ref={section1Ref as any} 
          id="section1" 
          className={`landing-section ${section1Visible ? 'animate-in' : ''}`}
        >
          <h2>Integra nuestra API</h2>
          <p>
            Te ayudará con la optimización al momento que tus clientes realicen
            una orden de compra en tu sitio
          </p>

          <div className="landing-plugins">
            <div className="landing-plugin floating">
              <img src={prestashop} alt="PrestaShop" />
            </div>
            <div className="landing-plugin floating">
              <img src={shopify} alt="Shopify" />
            </div>
            <div className="landing-plugin floating">
              <img src={woocommerce} alt="WooCommerce" />
            </div>
          </div>
        </section>

        <Divider />

        {/* SECTION 2 */}
        <section 
          ref={section2Ref as any}
          id="section2" 
          className={`landing-section ${section2Visible ? 'animate-in' : ''}`}
        >
          <div className="title_highlighted">
            <div className="normal_text">¡Hazlo de la manera</div>
            <div className="highlighted_text">más sencilla!</div>
          </div>

          <div className="landing-steps">
            <div className="landing-step">
              <CiUser className="landing-step-icon" />
              <div className="landing-step-number">1</div>
              <div className="landing-step-text">Regístrate</div>
            </div>

            <div className="landing-step">
              <CiCalculator1 className="landing-step-icon" />
              <div className="landing-step-number">2</div>
              <div className="landing-step-text">Cotiza</div>
            </div>

            <div className="landing-step">
              <CiCircleCheck className="landing-step-icon" />
              <div className="landing-step-number">3</div>
              <div className="landing-step-text">Selecciona</div>
            </div>

            <div className="landing-step">
              <CiMoneyBill className="landing-step-icon" />
              <div className="landing-step-number">4</div>
              <div className="landing-step-text">Paga</div>
            </div>

            <div className="landing-step">
              <BsReceiptCutoff className="landing-step-icon" />
              <div className="landing-step-number">5</div>
              <div className="landing-step-text">Obtén tu guía</div>
            </div>
          </div>
        </section>


        {/* SECTION 3 */}
        <section 
          ref={section3Ref as any}
          id="section3" 
          className={`landing-section landing-flex ${section3Visible ? 'animate-in' : ''}`}
        >
          <div className="landing-flex-text">
            <h2>Quiénes somos?</h2>
            <p>
              Somos una plataforma digital, que apoya a los pequeñas y medianas
              empresas a encontrar el mejor socio logístico para la distribución
              de sus envíos. Ahorra dinero y tiempo teniendo todo en un mismo
              lugar.
            </p>
          </div>
          <div className="landing-flex-image parallax-container">
            <video
              ref={video1Ref as any}
              src={video1}
              autoPlay
              muted
              loop
              className="about-us-video parallax-element"
            />
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="section4" className="landing-section landing-flex">
          <div className="landing-flex-image parallax-container">
            <video
              ref={video2Ref as any}
              src={video2}
              autoPlay
              muted
              loop
              className="about-us-video parallax-element"
            />
          </div>

          <div className="landing-flex-text">
            <h2>API de ShopeEnvíos</h2>
            <p>
              Automatiza el proceso de generación de guías en tu tienda en línea,
              integra nuestra API que te ayudará con la optimización al momento
              que tus clientes realicen una orden de compra en tu sitio.
            </p>
          </div>
        </section>

        <Divider />

        {/* SECTION 5 */}
        <section id="section5" className="landing-section">

            <div className="section5-text">
                <h2>Carta porte en ShopeEnvíos</h2>
                <p>Recuerda que a partir del 01 de enero del 2022, por disposición oficial del SAT, es importante declarar de manera precisa el contenido y medidas con exactitud de todos tus envíos. En ShopeEnvíos nos encargamos de hacer más dinámico este proceso, por lo que no será complicado la emisión de la misma para las empresas transportistas.</p>
            </div>
            <div className="parallax-container">
              <img 
                ref={image2Ref as any} 
                src={image2} 
                className="landing-image parallax-element" 
                alt="Carta porte ShopeEnvíos" 
              />
            </div>
        </section>

        <Divider />

        {/* SECTION 6 */}
        <section id="section6" className="landing-section">
            <img 
              src={image3} 
              className="landing-image" 
              alt="ShopeEnvíos Services" 
            />
        </section>

        <Divider />

        {/* SECTION 7 */}
        <section id="section7" className="landing-section">
            <h2>Partner´s Shope Envíos</h2>
            <Partners />

            <p className="cta_text">Nuestra plataforma multipaquetería esta pensada para adaptarse al crecimiento de tu negocio.</p>
        </section>

        {/* ANIMATED METRICS SECTION */}
        <AnimatedMetrics />


      </div>
    </div>
  );
}