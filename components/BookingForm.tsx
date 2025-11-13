const BookingForm = () => (
    <div className="container-fluid booking mt-5 pb-5">
        <div className="container pb-5">
            <div className="bg-light shadow p-4">
                <div className="row align-items-center" style={{ minHeight: 60 }}>
                    <div className="col-md-10">
                        <div className="row">
                            {["Destination", "Depart Date", "Return Date", "Duration"].map((label, idx) => (
                                <div key={label} className="col-md-3 mb-3 mb-md-0">
                                    {idx === 0 || idx === 3 ? (
                                        <select className="custom-select px-4" style={{ height: 47 }}>
                                            <option>{label}</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                        </select>
                                    ) : (
                                        <input
                                            type="text"
                                            className="form-control p-4 datetimepicker-input"
                                            placeholder={label}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary btn-block" style={{ height: 47 }}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default BookingForm;
