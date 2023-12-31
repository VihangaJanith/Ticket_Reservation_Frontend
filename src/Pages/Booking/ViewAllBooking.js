import axios from "axios";
import React, { useEffect, useState } from "react";

function ViewAllBooking() {
    const [alltrains, setAlltrains] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5068/api/booking").then((res) => {
            console.log(res.data);
            setAlltrains(res.data);
        });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5068/api/booking/${id}`);

            alert("Booking Deleted Successfully");
            window.location.href = "/allbookings";
        } catch (error) {
            console.error("Error deleting Booking data:", error);
        }
    };

    //create a function to handle active and inactive if active make it inactive and vice versa

    const handleActive = async (id, train) => {
        try {

            await axios.put(`http://localhost:5068/api/booking/${id}`, {
                ...train,
                status: "Approved",
            });
            alert("Booking Approved Successfully");
            window.location.href = "/allbookings";
        } catch (error) {
            console.error("Error updating train data:", error);
        }
    };

    return (
        <>
            <header className="bg-primary text-white text-center py-2 mb-3">
                <h1>All Reservation Details</h1>
                <p>View All Reservation Details</p>
            </header>
            {
            },
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Booked Date</th>
                            <th>Customer Name</th>
                            <th>Train Name</th>
                            <th>Train Time</th>
                            <th>No of Tickets</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alltrains.map((train) => (
                            <tr key={train.id}>
                                <td>
                                    {train.bookedDate}
                                </td>
                                <td>{train.trainName}</td>
                                <td>{train.traintime}</td>
                                <td>{train.cusName}</td>
                                <td>{train.noOfTickets}</td>
                                <td>{train.total}</td>
                                <td>
                                    <button
                                        disabled={train.status === "Approved"}
                                        className={train.status === "Approved" ? "btn btn-success" : "btn btn-warning"}
                                        onClick={() => handleActive(train.id, train)}
                                        style={{ marginLeft: "5px" }} // Add left margin to create spacing
                                    >
                                        {train.status}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        disabled={train.status === "Approved"}
                                        className={"btn btn-danger"}
                                        onClick={() => handleDelete(train.id)}
                                        style={{ marginLeft: "5px" }} // Add left margin to create spacing
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ViewAllBooking;
