import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoneyCheckAlt,
    faAward,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

const FeatureSection = () => {
    const features = [
        {
            icon: faMoneyCheckAlt,
            title: "Competitive Pricing",
            description: "Affordable safari packages designed to offer great value without compromising on comfort or experience."
        },
        {
            icon: faAward,
            title: "Best Services",
            description: "Professional guides, top-notch accommodations, and personalized itineraries for every traveler."
        },
        {
            icon: faGlobe,
            title: "Worldwide Coverage",
            description: "We offer safari experiences in Uganda and connections to select destinations across Africa."
        },
    ];

    return (
        <div className="container-fluid pb-5" id="features">
            <div className="container pb-5">
                <div className="row">
                    {features.map((f, idx) => (
                        <div key={idx} className="col-md-4">
                            <div className="d-flex mb-4">
                                <div
                                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                                    style={{ height: 100, width: 100 }}
                                >
                                    <FontAwesomeIcon
                                        icon={f.icon}
                                        size="2x"
                                        className="text-white"
                                    />
                                </div>
                                <div className="d-flex flex-column">
                                    <h5>{f.title}</h5>
                                    <p className="m-0">{f.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
