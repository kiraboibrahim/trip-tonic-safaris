import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faCalendarAlt,
    faUser,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import { Package } from "@/models/Package"; // import your model

const packages: Package[] = [
    {
        id: 1,
        title: "Safari Adventure in Queen Elizabeth National Park",
        location: "Queen Elizabeth",
        duration: "3 days",
        people: "2 Persons",
        price: 450,
        rating: 4.8,
        ratingCount: 120,
        image: "/img/package-1.jpg",
    },
    {
        id: 2,
        title: "Gorilla Trekking Experience in Bwindi Impenetrable Forest",
        location: "Bwindi",
        duration: "4 days",
        people: "2 Persons",
        price: 900,
        rating: 5.0,
        ratingCount: 85,
        image: "/img/package-2.jpg",
    },
    {
        id: 3,
        title: "Chimpanzee Tracking in Kibale Forest",
        location: "Kibale",
        duration: "3 days",
        people: "2 Persons",
        price: 600,
        rating: 4.7,
        ratingCount: 60,
        image: "/img/package-4.jpg",
    },
    {
        id: 4,
        title: "Relaxing Getaway at Ssese Islands",
        location: "Ssese Islands",
        duration: "2 days",
        people: "2 Persons",
        price: 350,
        rating: 4.6,
        ratingCount: 45,
        image: "/img/package-4.jpg",
    },
    {
        id: 5,
        title: "Mountains & Waterfalls Hike in Rwenzori Mountains",
        location: "Rwenzori",
        duration: "5 days",
        people: "2 Persons",
        price: 750,
        rating: 4.9,
        ratingCount: 70,
        image: "/img/package-5.jpg",
    },
    {
        id: 6,
        title: "Cultural Tour of Kampala and Surroundings",
        location: "Kampala",
        duration: "1 day",
        people: "2 Persons",
        price: 150,
        rating: 4.5,
        ratingCount: 100,
        image: "/img/package-6.jpg",
    },
];

const PackagesSection = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3 text-center">
                <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Packages</h6>
                <h1>Perfect Tour Packages</h1>
                <div className="row">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="package-item bg-white mb-2">
                                <img
                                    className="img-fluid"
                                    src={pkg.image}
                                    alt={pkg.title}
                                />
                                <div className="p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2" />
                                            {pkg.location}
                                        </small>
                                        <small>
                                            <FontAwesomeIcon icon={faCalendarAlt} className="text-primary me-2" />
                                            {pkg.duration}
                                        </small>
                                        <small>
                                            <FontAwesomeIcon icon={faUser} className="text-primary me-2" />
                                            {pkg.people}
                                        </small>
                                    </div>
                                    <a className="h5 text-decoration-none" href="#">{pkg.title}</a>
                                    <div className="border-top mt-4 pt-4 d-flex justify-content-between">
                                        <h6 className="m-0">
                                            <FontAwesomeIcon icon={faStar} className="text-primary me-2" />
                                            {pkg.rating} <small>({pkg.ratingCount})</small>
                                        </h6>
                                        <h5 className="m-0">${pkg.price}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PackagesSection;
