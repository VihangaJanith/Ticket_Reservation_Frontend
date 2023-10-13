import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Row } from 'react-bootstrap';

function ViewMyBookings() {
    const [bookings, setBookings] = useState();

    useEffect((e) => {
        getMyBookings();
    }, []);

    const getMyBookings = () => {

        let result = localStorage.getItem("token")
        const abc = { token: result }
        console.log(abc.token);

        axios.get(`http://localhost:5068/api/booking/mybookings/${abc.token}`).then(res => {

            if (res.data.length != 0) {
                setBookings(res.data)
            } else {

            }
            console.log(res.data)
        })
            .catch((err) => {
                alert(err);
            })
    }

    const deleteOrder = (id, date) => {
        const orderDate = new Date(date);
        const currentDate = new Date();

        // Calculate the time difference in milliseconds
        const timeDifference = currentDate - orderDate;

        // Calculate the time difference in days
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference > 5) {
            alert('You cannot cancel this reservation. You can cancel within 5 days of booking.');
        } else {
            axios.delete(`http://localhost:5068/api/booking/${id}`).then((res) => {
                console.log(res.data)
                alert('Reservation Cancelled Successfully')
                window.location.reload();
            })
        }
    }

    return (
        <div>
            <div className="">
                <header className="bg-primary text-white text-center py-5 mb-5">
                    <h1>My Reserved Tickets</h1>
                    <p>View My Reserved Tickets</p>
                </header>
                {bookings ? <div>
                    <div class=" mt-5 mb-5" >
                        <div class="d-flex justify-content-center" >
                            <div class="col-md-8" >
                                <Row xs={1} md={1} className="g-4" id="by" class="rounded">
                                    {bookings.map((booking, index) => (
                                        <div class="row p-2  border rounded pb-4 pt-4 " style={{ background: "hsl(0,0%,75%,0.3)", marginTop: "30px" }}>

                                            <div class="col-md-3 mt-1"><img
                                                class="img-fluid img-responsive rounded product-image"
                                                src="https://bsmedia.business-standard.com/_media/bs/img/article/2019-09/30/full/1569790979-4055.jpg"
                                                style={{ height: '130px', marginTop: "14px" }} />
                                            </div>

                                            <div class="col-md-6 mt-1">
                                                <h5>{index + 1}. &nbsp;{booking?.trainName} - ( {booking?.noOfTickets} Tickets)
                                                    <span class="badge bg-secondary ms-2">{booking?.status}</span></h5>
                                                <div class="d-flex flex-row">
                                                    <div className='fst-italic text-muted mb-3'> Booked at {booking?.bookedDate} ,  by Mr/Mrs.{booking?.cusName}</div>
                                                </div>
                                                <p class="text-justify  para mb-0">
                                                    If you want to cancel your reservation, please do it within 5 days of booking. Otherwise, you can't cancel your reservation.
                                                </p>
                                            </div>

                                            <div class="align-items-center align-content-center col-md-3 border-left mt-1">

                                                <div class="d-flex flex-row align-items-center">
                                                    <h4 class="mr-1">Rs. {booking?.total}</h4>
                                                </div>
                                                <h6 class="text-success">   Thank you Mr/Mrs.{booking?.cusName}</h6>
                                                <div class="d-flex flex-column mt-4">
                                                    <button onClick={() => { window.location.replace(`./editbooking/${booking?.id}`) }} style={{ border: "0", backgroundColor: booking.status == "Pending" ? "#b14700" : "" }} className="btn btn-success btn-sm mb-2">
                                                        <text>Edit Details</text>
                                                    </button>
                                                    <button class="btn btn-danger btn-sm " style={{ border: "0", backgroundColor: booking.status == "Pending" ? "#722828" : "" }} type="button" onClick={(e) => deleteOrder(booking?.id, booking?.bookedDate)} >
                                                        <text>Cancle Reservation</text>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </div>
                </div> : <div class="alert alert-primary mt-5" role="alert" style={{ textAlign: 'center' }}>
                    <h3>There is no any Reservations</h3>
                </div>}
            </div>
        </div>
    )
}

export default ViewMyBookings