const RegistrationSection = () => (
    <div
        className="container-fluid py-5 my-5"
        style={{ backgroundColor: "#2C3E50" }} // Dark earthy background
    >
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Offer Info */}
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Special Offer</h6>
                        <h1 className="text-white"><span className="text-primary">25% OFF</span> For Safari Adventures</h1>
                    </div>
                    <p className="text-white">
                        Embark on an unforgettable safari in Uganda&lsquo;s most iconic national parks. Enjoy wildlife, breathtaking landscapes, and guided tours at a special discounted rate.
                    </p>
                    <ul className="list-inline text-white m-0">
                        <li className="py-2"><i className="fa fa-check text-primary mr-3" />Guided safaris in Murchison Falls & Queen Elizabeth</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3" />Luxury lodges with stunning views</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3" />Customizable itineraries to fit your schedule</li>
                    </ul>
                </div>

                {/* Registration Form */}
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-header bg-primary text-center p-4">
                            <h1 className="text-white m-0">Sign Up Now</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-white p-5">
                            <form>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control p-4" placeholder="Your Name" required />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control p-4" placeholder="Your Email" required />
                                </div>
                                <div className="form-group mb-3">
                                    <select className="custom-select px-4" style={{ height: 47 }} required>
                                        <option value="">Select a Destination</option>
                                        <option value="murchison-falls">Murchison Falls National Park</option>
                                        <option value="queen-elizabeth">Queen Elizabeth National Park</option>
                                        <option value="lake-mburo">Lake Mburo National Park</option>
                                        <option value="bwindi">Bwindi Impenetrable Forest</option>
                                    </select>
                                </div>
                                <button className="btn btn-primary btn-block py-3" type="submit">
                                    Sign Up Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default RegistrationSection;
