import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoneyCheckAlt,
    faAward,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

const FeatureSection = () => {
    const features = [
        { icon: faMoneyCheckAlt, title: "Competitive Pricing" },
        { icon: faAward, title: "Best Services" },
        { icon: faGlobe, title: "Worldwide Coverage" },
    ];

    return (
        <div className="container-fluid pb-5">
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
                                    <p className="m-0">
                                        Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea
                                    </p>
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
