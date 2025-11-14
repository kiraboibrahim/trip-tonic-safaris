import { useState, ChangeEvent } from "react";
import { submitSignup, RegistrationData } from "../services/api";

const DESTINATION_OPTIONS = [
    { value: "murchison-falls", label: "Murchison Falls National Park" },
    { value: "queen-elizabeth", label: "Queen Elizabeth National Park" },
    { value: "lake-mburo", label: "Lake Mburo National Park" },
    { value: "bwindi", label: "Bwindi Impenetrable Forest" },
];

const RegistrationSection: React.FC = () => {
    const [form, setForm] = useState<RegistrationData>({
        name: "",
        email: "",
        destination: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        try {
            await submitSignup(form);
            alert("You have successfully signed up for the special offer!");
            setForm({ name: "", email: "", destination: "" });
        } catch (err) {
            console.error(err);
            alert("Failed to submit signup. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="container-fluid py-5 my-5"
            style={{ backgroundColor: "#2C3E50" }}
            id="special-offer"
        >
            <div className="container py-5">
                <div className="row align-items-center">
                    {/* Offer Info */}
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="mb-4">
                            <h6
                                className="text-primary text-uppercase"
                                style={{ letterSpacing: 5 }}
                            >
                                Special Offer
                            </h6>
                            <h1 className="text-white">
                                <span className="text-primary">25% OFF</span> For Safari
                                Adventures
                            </h1>
                        </div>
                        <p className="text-white">
                            Embark on an unforgettable safari in Uganda&lsquo;s most iconic
                            national parks. Enjoy wildlife, breathtaking landscapes, and
                            guided tours at a special discounted rate.
                        </p>
                        <ul className="list-inline text-white m-0">
                            <li className="py-2">
                                <i className="fa fa-check text-primary mr-3" />
                                Guided safaris in Murchison Falls & Queen Elizabeth
                            </li>
                            <li className="py-2">
                                <i className="fa fa-check text-primary mr-3" />
                                Luxury lodges with stunning views
                            </li>
                            <li className="py-2">
                                <i className="fa fa-check text-primary mr-3" />
                                Customizable itineraries to fit your schedule
                            </li>
                        </ul>
                    </div>

                    {/* Registration Form */}
                    <div className="col-lg-5">
                        <div className="card border-0">
                            <div className="card-header bg-primary text-center p-4">
                                <h1 className="text-white m-0">Sign Up Now</h1>
                            </div>
                            <div className="card-body rounded-bottom bg-white p-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control p-4"
                                            placeholder="Your Name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control p-4"
                                            placeholder="Your Email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <select
                                            title="Destination"
                                            name="destination"
                                            className="custom-select px-4"
                                            style={{ height: 47 }}
                                            value={form.destination}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a Destination</option>
                                            {DESTINATION_OPTIONS.map((d) => (
                                                <option key={d.value} value={d.value}>
                                                    {d.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block py-3"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span
                                                className="spinner-border spinner-border-sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            "Sign Up Now"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationSection;
