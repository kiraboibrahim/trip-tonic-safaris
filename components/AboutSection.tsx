const AboutSection = () => (
    <div className="container-fluid py-5" id="about">
        <div className="container pt-5">
            <div className="row">
                <div className="col-lg-6" style={{ minHeight: 500 }}>
                    <div className="position-relative h-100">
                        <img
                            className="position-absolute w-100 h-100"
                            src="/img/about.jpg"
                            style={{ objectFit: "cover" }}
                            alt="About Trip Tonic Safaris"
                        />
                    </div>
                </div>
                <div className="col-lg-6 pt-5 pb-lg-5">
                    <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>About Us</h6>
                        <h1 className="mb-3">Experience Uganda&lsquo;s Wonders with Our Expertly Curated Safari Packages</h1>
                        <p>
                            Trip Tonic Safaris specializes in creating unforgettable safari adventures
                            in Uganda’s national parks. From wildlife encounters and scenic landscapes
                            to luxury lodges and guided tours, we offer personalized experiences
                            tailored to your budget and schedule.
                        </p>
                        <div className="row mb-4">
                            <div className="col-6">
                                <img
                                    className="img-fluid"
                                    src="/img/spacious-rides.jpeg"
                                    alt="Spacious safari rides"
                                />
                            </div>
                            <div className="col-6">
                                <img
                                    className="img-fluid"
                                    src="/img/hotel-view-with-sunset.jpeg"
                                    alt="Luxury lodge view at sunset"
                                />
                            </div>
                        </div>
                        <a href="#" className="btn btn-primary mt-1">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutSection;
