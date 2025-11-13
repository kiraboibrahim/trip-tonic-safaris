import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonial } from "@/models/Testimonial";

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Nakato",
        profession: "Adventure Traveler",
        image: "/img/testimonial-1.jpg",
        text: "The gorilla trekking in Bwindi was a once-in-a-lifetime experience. The guides were knowledgeable and very friendly!",
    },
    {
        id: 2,
        name: "David Okello",
        profession: "Safari Enthusiast",
        image: "/img/testimonial-2.jpg",
        text: "Queen Elizabeth National Park safari exceeded my expectations. We saw lions, elephants, and even hippos in the wild!",
    },
    {
        id: 3,
        name: "Grace Achieng",
        profession: "Cultural Explorer",
        image: "/img/testimonial-3.jpg",
        text: "Visiting the Ssese Islands was amazing. The beaches are pristine and the local community is welcoming and kind.",
    },
    {
        id: 4,
        name: "Michael Kato",
        profession: "Nature Lover",
        image: "/img/testimonial-4.jpg",
        text: "The Rwenzori Mountains hike was challenging but incredibly rewarding. Stunning scenery all the way!",
    },
    {
        id: 5,
        name: "Esther Namutebi",
        profession: "Photographer",
        image: "/img/testimonial-5.jpg",
        text: "Jinja and the Nile adventure sports were thrilling. Kayaking and bungee jumping made it unforgettable.",
    },
    {
        id: 6,
        name: "Joseph Lutaaya",
        profession: "Explorer",
        image: "/img/testimonial-6.jpg",
        text: "Kibale Forest chimpanzee tracking was amazing. The guides ensured we had a safe and educational experience.",
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
};

const TestimonialSection = () => (
    <div className="container-fluid py-5">
        <div className="container py-5 text-center">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Testimonial</h6>
            <h1>What Our Clients Say</h1>
            <Slider {...settings} className="mt-4">
                {testimonials.map((t) => (
                    <div key={t.id} className="px-2">
                        <div className="text-center pb-4">
                            <Image
                                width={80}
                                height={80}
                                className="img-fluid mx-auto rounded-circle"
                                src={t.image}
                                alt={t.name}
                            />
                            <div className="testimonial-text bg-white p-3 mt-3" style={{ minHeight: 130 }}>
                                <p className="mb-2" style={{ fontSize: "0.9rem" }}>
                                    {t.text}
                                </p>
                                <h5 className="text-truncate mb-0">{t.name}</h5>
                                <span style={{ fontSize: "0.8rem" }}>{t.profession}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
);

export default TestimonialSection;
