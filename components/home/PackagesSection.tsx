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
        rating: 4.8,
        ratingCount: 120,
        image: "/img/packages/buffalo-queen-elizabeth.jpg",
    },
    {
        id: 2,
        title: "Gorilla Trekking Experience in Bwindi Impenetrable Forest",
        location: "Bwindi",
        duration: "4 days",
        people: "2 Persons",
        rating: 5.0,
        ratingCount: 85,
        image: "/img/packages/gorilla-trekking.jpg",
    },
    {
        id: 3,
        title: "Chimpanzee Tracking in Kibale National Park",
        location: "Kibale",
        duration: "3 days",
        people: "2 Persons",
        rating: 4.7,
        ratingCount: 60,
        image: "/img/packages/chimpanzee-kibale-park.jpg",
    },
    {
        id: 5,
        title: "Mountainiring at Rwenzori Mountains",
        location: "Rwenzori Mountains National Park",
        duration: "5 days",
        people: "2 Persons",
        rating: 4.9,
        ratingCount: 70,
        image: "/img/packages/hiking-rwenzori-national-park.jpg",
    },
    {
        id: 6,
        title: "Kampala City Tour",
        location: "Kampala",
        duration: "1 day",
        people: "2 Persons",
        rating: 4.5,
        ratingCount: 100,
        image: "/img/packages/kampala-city-tour.jpg",
    },
];

const PackagesSection = () => {
    return (
        <div className="w-full py-5" id="packages">
            <div className="max-w-[1140px] mx-auto px-[15px] pt-5 pb-3 text-center">
                <h6
                    className="text-[#7AB730] uppercase mb-2 text-base font-medium leading-[1.2]"
                    style={{ letterSpacing: 5 }}
                >
                    Packages
                </h6>
                <h1 className="mb-2 text-[2.5rem] max-[1200px]:text-[calc(1.375rem_+_1.5vw)] font-medium leading-[1.2] text-[#212121]">
                    Perfect Tour Packages
                </h1>
                <div className="flex flex-wrap -mx-[15px]">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="lg:w-1/3 md:w-1/2 w-full px-[15px] mb-4">
                            <div className="bg-white mb-2 transition-[box-shadow_0.5s] shadow-[0_0_30px_#CCCCCC]">
                                <img
                                    className="w-full h-[250px] object-cover"
                                    src={pkg.image}
                                    alt={pkg.title}
                                />
                                <div className="p-4">
                                    <div className="flex justify-between mb-3">
                                        <small className="text-[80%] font-normal truncate max-w-[35%]" title={pkg.location}>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#7AB730] mr-2" />
                                            {pkg.location}
                                        </small>
                                        <small className="text-[80%] font-normal">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="text-[#7AB730] mr-2" />
                                            {pkg.duration}
                                        </small>
                                        <small className="text-[80%] font-normal">
                                            <FontAwesomeIcon icon={faUser} className="text-[#7AB730] mr-2" />
                                            {pkg.people}
                                        </small>
                                    </div>
                                    <a className="block text-[1.25rem] font-medium leading-[1.2] text-[#212121] no-underline hover:text-[#7AB730] h-[3.6rem] overflow-hidden" href="#" title={pkg.title}>
                                        {pkg.title}
                                    </a>
                                    <div className="border-t border-[rgba(0,0,0,0.1)] mt-4 pt-4 flex justify-between">
                                        <h6 className="m-0 text-base font-medium leading-[1.2] text-[#212121]">
                                            <FontAwesomeIcon icon={faStar} className="text-[#7AB730] mr-2" />
                                            {pkg.rating} <small className="text-[80%] font-normal">({pkg.ratingCount})</small>
                                        </h6>
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