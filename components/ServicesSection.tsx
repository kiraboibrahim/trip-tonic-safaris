import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRoute,
    faTicketAlt,
    faHotel
} from '@fortawesome/free-solid-svg-icons';

const ServicesSection = () => {
    const services = [
        { icon: faRoute, title: "Travel Guide" },
        { icon: faTicketAlt, title: "Ticket Booking" },
        { icon: faHotel, title: "Hotel Booking" },
    ];

    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3 text-center">
                <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Services</h6>
                <h1>Tours & Travel Services</h1>
                <div className="row">
                    {services.map((s, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6 mb-4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <FontAwesomeIcon
                                    icon={s.icon}
                                    size="2x"
                                    className="mx-auto mb-4 text-primary"
                                />
                                <h5 className="mb-2">{s.title}</h5>
                                <p className="m-0">
                                    Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                                    Amet lorem est amet labore
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
