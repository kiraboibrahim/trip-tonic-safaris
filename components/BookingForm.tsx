import { useState, ChangeEvent } from "react";
import { submitBooking, BookingData } from "@/services/api";


const DESTINATION_OPTIONS = [
    { value: "murchison-falls", label: "Murchison Falls" },
    { value: "queen-elizabeth", label: "Queen Elizabeth" },
    { value: "lake-mburo", label: "Lake Mburo" },
    { value: "bwindi", label: "Bwindi Impenetrable Forest" },
];

const DURATION_OPTIONS = [1, 2, 3, 4, 5, 7, 10, 14];

const BookingForm: React.FC = () => {
    const [form, setForm] = useState<BookingData>({
        destination: "",
        depart_date: "",
        return_date: "",
        duration: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async () => {
        if (loading) return;
        setLoading(true);

        try {
            // Ensure duration is a number
            const payload: BookingData = {
                ...form,
                duration: Number(form.duration),
            };

            await submitBooking(payload);
            alert("Booking request submitted successfully!");
            setForm({
                destination: "",
                depart_date: "",
                return_date: "",
                duration: "",
            });
        } catch (err) {
            console.error(err);
            alert("Failed to submit booking request.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid booking mt-5 pb-5" id="booking">
            <div className="container pb-5">
                <div className="bg-light shadow p-4">
                    <div className="row align-items-center" style={{ minHeight: 60 }}>
                        <div className="col-md-10">
                            <div className="row">
                                {/* Destination */}
                                <div className="col-md-3 mb-3 mb-md-0">
                                    <select
                                        title="Destination"
                                        name="destination"
                                        className="custom-select px-4"
                                        style={{ height: 47 }}
                                        value={form.destination}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Destination</option>
                                        {DESTINATION_OPTIONS.map((d) => (
                                            <option key={d.value} value={d.value}>
                                                {d.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Depart Date */}
                                <div className="col-md-3 mb-3 mb-md-0">
                                    <input
                                        title="Depart Date"
                                        type="date"
                                        name="depart_date"
                                        className="form-control p-4 datetimepicker-input"
                                        value={form.depart_date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Return Date */}
                                <div className="col-md-3 mb-3 mb-md-0">
                                    <input
                                        title="Return Date"
                                        type="date"
                                        name="return_date"
                                        className="form-control p-4 datetimepicker-input"
                                        value={form.return_date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Duration */}
                                <div className="col-md-3 mb-3 mb-md-0">
                                    <select
                                        title="Duration"
                                        name="duration"
                                        className="custom-select px-4"
                                        style={{ height: 47 }}
                                        value={form.duration}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Duration</option>
                                        {DURATION_OPTIONS.map((d) => (
                                            <option key={d} value={d}>
                                                {d} days
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="col-md-2">
                            <button
                                className="btn btn-primary btn-block"
                                style={{ height: 47 }}
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? <span className="spinner-border spinner-border-sm"></span> : "Submit"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
