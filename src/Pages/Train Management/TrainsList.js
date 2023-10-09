import axios from "axios";
import React, { useEffect, useState } from "react";

function TrainsList() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5068/api/trains").then((res) => {
      console.log(res.data);
      setTrains(res.data);
    });
  }, []);

  return (
    <>
      <header className="bg-primary text-white text-center py-5 mb-5">
        <h1>Reserve Tickets</h1>
        <p>Reserve Tickets by clicking Book Now Button</p>
      </header>
      <div className="container">
        <div className="row">
          {trains.map((train) => (
            <div key={train.id} className="col-md-3 mb-3">
              <div className="card">
                <img
                  src={train.imageURL}
                  className="card-img-top"
                  alt={train.trainName}
                />
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8">
                      <h5 className="card-title">{train.trainName}</h5>
                    </div>
                    <div className="col-md-4">
                      <span className="badge bg-primary">{train.type}</span>
                    </div>
                  </div>

                  <p className="card-text">Start: {train.from}</p>
                  <p className="card-text">Destination: {train.to}</p>
                  <p className="card-text">Departure: {train.departureTime}</p>
                  <p className="card-text">Arrival: {train.arrivalTime}</p>
                  <button className="btn btn-primary w-100 mt-2">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrainsList;
