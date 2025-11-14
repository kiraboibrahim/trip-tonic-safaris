import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faFacebookF,
    faInstagram,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const TeamSection = () => {
    const socialIcons: Record<string, IconDefinition> = {
        twitter: faTwitter,
        "facebook-f": faFacebookF,
        instagram: faInstagram,
        "linkedin-in": faLinkedinIn,
    };

    return (
        <div className="container-fluid py-5" id="team">
            <div className="container pt-5 pb-3 text-center">
                <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Guides</h6>
                <h1>Our Travel Guides</h1>
                <div className="row">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-2">
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img
                                        className="img-fluid w-100"
                                        src={`/img/team-${i}.jpg`}
                                        alt={`Guide ${i}`}
                                    />
                                    <div className="team-social">
                                        {Object.keys(socialIcons).map((icon) => (
                                            <a
                                                key={icon}
                                                className="btn btn-outline-primary btn-square"
                                                href="#"
                                            >
                                                <FontAwesomeIcon icon={socialIcons[icon]} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Guide Name</h5>
                                    <p className="m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;