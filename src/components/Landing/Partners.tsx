
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Importing shipment company logos
import minutosLogo from "../../assets/img/shipment/99minutos.png";
import dhlLogo from "../../assets/img/shipment/dhl.png";
import estafetaLogo from "../../assets/img/shipment/estafeta.png";
import fedexLogo from "../../assets/img/shipment/fedex.png";
import redpackLogo from "../../assets/img/shipment/redpack.png";

const partners = [
  {
    company_id: 1,
    name: "99 Minutos",
    logo: minutosLogo
  },
  {
    company_id: 2,
    name: "DHL",
    logo: dhlLogo
  },
  {
    company_id: 3,
    name: "Estafeta",
    logo: estafetaLogo
  },
  {
    company_id: 4,
    name: "FedEx",
    logo: fedexLogo
  },
  {
    company_id: 5,
    name: "RedPack",
    logo: redpackLogo
  }
];

export default function Partners() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div className="partners_carrousel">
        <Carousel responsive={responsive}
            additionalTransfrom={0}
            autoPlay
            autoPlaySpeed={4000}
            centerMode={true}
            className=""
            containerClass="container-with-dots"
            customTransition="all 1s linear"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover={false}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
        >
            {partners.map((c: any, index: number) => (
                <div className="partner" key={index}>
                    <img src={c.logo} alt={c.name} />
                </div>
            ))}
        </Carousel>
    </div>
  );
}