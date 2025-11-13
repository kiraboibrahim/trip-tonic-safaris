import { Destination } from "@/models/Destination";

const destinations: Destination[] = [
    {
        id: 1,
        name: "Murchison Falls National Park",
        location: "Northern Uganda",
        attractionsCount: 50,
        image: "/img/destination-1.jpg",
    },
    {
        id: 2,
        name: "Bwindi Impenetrable Forest",
        location: "Southwestern Uganda",
        attractionsCount: 30,
        image: "/img/destination-2.jpg",
    },
    {
        id: 3,
        name: "Kidepo Valley National Park",
        location: "Northeastern Uganda",
        attractionsCount: 25,
        image: "/img/destination-3.jpg",
    },
    {
        id: 4,
        name: "Ssese Islands",
        location: "Lake Victoria",
        attractionsCount: 15,
        image: "/img/destination-4.jpg",
    },
    {
        id: 5,
        name: "Rwenzori Mountains",
        location: "Western Uganda",
        attractionsCount: 20,
        image: "/img/destination-5.jpg",
    },
    {
        id: 6,
        name: "Jinja – Source of the Nile",
        location: "Eastern Uganda",
        attractionsCount: 10,
        image: "/img/destination-6.jpg",
    },
];

const DestinationSection = () => (
    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3 text-center">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Destination</h6>
            <h1>Explore Top Destinations in Uganda</h1>
            <div className="row">
                {destinations.map((dest) => (
                    <div key={dest.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="destination-item position-relative overflow-hidden mb-2">
                            <img className="img-fluid" src={dest.image} alt={dest.name} />
                            <a className="destination-overlay text-white text-decoration-none" href="#">
                                <h5 className="text-white">{dest.name}</h5>
                                <span>{dest.attractionsCount} Attractions</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default DestinationSection;
