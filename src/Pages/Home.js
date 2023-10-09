import React from "react";

function Home() {
  return (
    <div>
      <header className="bg-primary text-white text-center py-5">
        <h1>Welcome to Train Go</h1>
        <p>Your one-stop destination for booking train tickets.</p>
      </header>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Find Your Journey</h2>
            {/* <form>
              <div className="mb-3">
                <label htmlFor="departureStation" className="form-label">
                  Departure Station
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="departureStation"
                  placeholder="Enter departure station"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="arrivalStation" className="form-label">
                  Arrival Station
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="arrivalStation"
                  placeholder="Enter arrival station"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Search Trains
              </button>
            </form> */}

            <p style={{ fontSize: "20px" }}>
              "Train Go" is the premier train booking system designed to provide
              travelers in Sri Lanka with a seamless and efficient way to plan,
              book, and manage their train journeys. This innovative application
              offers a range of features and benefits, making it the go-to
              choice for both local commuters and tourists exploring the
              picturesque landscapes of Sri Lanka
            </p>
            <button className="btn btn-primary w-50 h-30">Book Now</button>
          </div>
          <div className="col-md-6">
            <img
              style={{ borderRadius: "10px" }}
              src="https://media.istockphoto.com/id/457433171/photo/red-high-speed-train-with-blurred-motion.jpg?s=612x612&w=0&k=20&c=dtaL6VyNhrKhM1-tQIE7OF3WcpVgc9SFEjFVmcOFFLM="
              alt="Train"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
