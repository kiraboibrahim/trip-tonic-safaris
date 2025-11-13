import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Topbar = () => (
    <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" />triptonicsafaris1999@gmail.com</p>
                        <p className="text-body px-3">|</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> +256 781 306 607</p>
                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        {[faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube].map((icon, i) => (
                            <Link key={i} className="text-primary px-3" href="#">
                                <FontAwesomeIcon icon={icon} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Topbar;
