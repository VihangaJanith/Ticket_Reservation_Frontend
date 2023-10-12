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

    const deleteOrder = (e) => {
        const orderid = e.target.id;
        axios.delete(`https://foodordersystm.onrender.com/foodorder/admin/delete/${orderid}`).then((res) => {
            console.log(res.data)
            alert('Order Deleted')
            window.location.reload();
        })
    }

    const setaa = (id) => {
        const data = {
            cmp: true
        }
        axios.put(`https://foodordersystm.onrender.com/foodorder/admin/update/${id}`, data);
        window.location.reload();

    }

    return (
        <div>
            <div className="">
                <div class=""
                    style={{
                        backgroundColor: "rgb(255, 167, 84)",
                        paddingBottom: "5px",
                        paddingTop: "15px",
                    }}
                >
                    <h1 style={{ marginLeft: "100px", }} >My Reservations</h1>
                </div>
                {bookings ? <div>
                    <div class=" mt-5 mb-5" >
                        <div class="d-flex justify-content-center" >
                            <div class="col-md-8" >
                                <Row xs={1} md={1} className="g-4" id="by" class="rounded">
                                    {bookings.map((booking, index) => (
                                        <div class="row p-2  border rounded pb-4 pt-4 " style={{ background: "hsl(0,0%,75%,0.3)", marginTop: "30px" }}>

                                            <div class="col-md-3 mt-1"><img
                                                class="img-fluid img-responsive rounded product-image"
                                                src="https://media.istockphoto.com/id/457433171/photo/red-high-speed-train-with-blurred-motion.jpg?s=612x612&w=0&k=20&c=dtaL6VyNhrKhM1-tQIE7OF3WcpVgc9SFEjFVmcOFFLM="
                                                style={{ height: '130px', marginTop: "14px" }} />
                                            </div>

                                            <div class="col-md-6 mt-1">
                                                <h5>{index + 1}. &nbsp;{booking?.trainName} - ( {booking?.noOfTickets} )</h5>
                                                <div class="d-flex flex-row">
                                                    <div className='fst-italic text-muted mb-3'> Ordered at {booking?.bookdate} ,  by Mr/Mrs.{booking?.bookdate}</div>
                                                </div>
                                                <p class="text-justify  para mb-0">
                                                    If you want to cancel your reservation, please do it within 5 days of booking. Otherwise, you can't cancel your reservation.
                                                </p>
                                            </div>

                                            <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                <div class="d-flex flex-row align-items-center">
                                                    <h4 class="mr-1">Rs. {booking?.bookdate}</h4>
                                                </div>
                                                <h6 class="text-success">   Thank you Mr/Mrs.{booking?.cusName}</h6>
                                                <div class="d-flex flex-column mt-4">
                                                    <button onClick={() => setaa(booking.status)} style={{ border: "0", backgroundColor: booking.status == "Pending" ? "#b14700" : "" }} className="btn btn-success btn-sm mb-2">
                                                        {booking.status == "Pending" ? <text>Approve</text> : null}
                                                        {booking.status == "Approve" ? <text>Not Approve</text> : null}
                                                    </button>
                                                    <button class="btn btn-danger btn-sm " style={{ border: "0", backgroundColor: booking.status == "Pending" ? "#722828" : "" }} type="button" id={booking?.bookdate} onClick={(e) => deleteOrder(e)} >
                                                        {booking.status == "Pending" ? <text>Delete Reservation</text> : null}
                                                        {booking.status == "Approve" ? <text>Cancle Reservation</text> : null}
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