import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "@/models/Slide";
import Link from "next/link";

export const slides: Slide[] = [
    {
        id: 1,
        img: "/img/carousel-1.jpeg",
        title: "Encounter Majestic Giraffes in the Wild",
        description: "Get up close with Uganda's graceful giants at Murchison Falls National Park. A safari experience you will never forget!",
        link: "#special-offer",
    },
    {
        id: 2,
        img: "/img/carousel-2.jpeg",
        title: "Luxurious Stays & Sunset Dinners",
        description: "Relax in top-notch hotels as you enjoy breathtaking sunsets and delicious local cuisine along Lake Victoria or in Kampala.",
        link: "#special-offer",
    },
    {
        id: 3,
        img: "/img/carousel-3.jpeg",
        title: "Witness Elephants at Sunset",
        description: "Experience the thrill of watching majestic elephants roam the savannah during golden hour at Queen Elizabeth National Park.",
        link: "#special-offer",
    },
    {
        id: 5,
        img: "/img/carousel-5.jpeg",
        title: "Breathtaking African Sunsets",
        description: "Marvel at iconic acacia trees silhouetted against dramatic Ugandan sunsets. Perfect moments for photography and reflection.",
        link: "#special-offer",
    },
];

const Carousel: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        pauseOnHover: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <div className="container-fluid p-0">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="position-relative">
                        <Image
                            width="1920"
                            height="600"
                            className="w-100"
                            src={slide.img}
                            alt={`Slide ${slide.id}`}
                            style={{ height: '600px', objectFit: 'cover' }}
                        />
                        {/* Gradient overlay for better text readability */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
                            zIndex: 1
                        }} />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" style={{ zIndex: 2 }}>
                            <div className="p-3" style={{ maxWidth: 900 }}>
                                <h4
                                    className="text-white text-uppercase mb-md-3"
                                    style={{
                                        letterSpacing: '3px',
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                                    }}
                                >
                                    Tours & Travel
                                </h4>
                                <h1
                                    className="display-3 text-white mb-md-4"
                                    style={{
                                        textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {slide.title}
                                </h1>
                                <Link
                                    href={slide.link || "#special-offer"}
                                    className="btn btn-primary py-md-3 px-md-5 mt-2"
                                    style={{
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

// Typed arrow props
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

// Enhanced arrow styles
const arrowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.6)",
    width: 50,
    height: 50,
    borderRadius: "50%",
    zIndex: 2,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)"
};

// Next arrow
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        style={{ ...arrowStyle, right: 20 }}
        onClick={onClick}
        onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.8)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.6)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
        }}
    >
        <span className="carousel-control-next-icon" />
    </div>
);

// Prev arrow
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        style={{ ...arrowStyle, left: 20 }}
        onClick={onClick}
        onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.8)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.6)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
        }}
    >
        <span className="carousel-control-prev-icon" />
    </div>
);

export default Carousel;