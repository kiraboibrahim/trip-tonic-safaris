import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faFacebookF,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
    <>
        <footer className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{ marginTop: 90 }}>
            <div className="row pt-5">
                <div className="col-lg-5 col-md-6 mb-5">
                    <a href="#" className="navbar-brand">
                        <h1 className="text-primary"><span className="text-white">TRIP TONIC</span>SAFARIS</h1>
                    </a>
                    <p>
                        Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor.
                    </p>
                    <h6 className="text-white text-uppercase mt-4 mb-3" style={{ letterSpacing: 5 }}>Follow Us</h6>
                    <div className="d-flex justify-content-start">
                        {[faTwitter, faFacebookF, faLinkedinIn, faInstagram].map((icon, i) => (
                            <a key={i} className="btn btn-outline-primary btn-square mr-2" href="#">
                                <FontAwesomeIcon icon={icon} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 mb-5">
                    <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: 5 }}>Our Services</h5>
                    <div className="d-flex flex-column justify-content-start">
                        {["About", "Destination", "Services", "Packages", "Guides", "Testimonial"].map((item, i) => (
                            <a key={i} className="text-white-50 mb-2" href="#">
                                <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> {item}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 mb-5">
                    <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: 5 }}>Useful Links</h5>
                    <div className="d-flex flex-column justify-content-start">
                        {["About", "Destination", "Services", "Packages", "Guides", "Blog"].map((item, i) => (
                            <a key={i} className="text-white-50 mb-2" href="#">
                                <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> {item}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-5">
                    <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: 5 }}>Contact Us</h5>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 123 Street, Kampala, Uganda</p>
                    <p><FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> +256 781 306 607</p>
                    <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" />triptonicsafaris1999@gmail.com</p>

                    <h6 className="text-white text-uppercase mt-4 mb-3" style={{ letterSpacing: 5 }}>Newsletter</h6>
                    <div className="w-100">
                        <div className="input-group">
                            <input type="email" className="form-control border-light" style={{ padding: 15 }} placeholder="Your Email" />
                            <div className="input-group-append">
                                <button className="btn btn-primary px-3">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: "rgba(256,256,256,.1) !important" }}>
            <div className="row">
                <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                    <p className="m-0 text-white-50">
                        &copy; {new Date().getFullYear()} <a href="#" className="text-white">Trip Tonic Safaris</a>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </>
);

export default Footer;
