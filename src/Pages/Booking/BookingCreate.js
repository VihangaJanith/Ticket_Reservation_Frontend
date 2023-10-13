import axios from "axios";
import React, { useEffect, useState } from "react";
import './Booking.css';

function BookingCreate() {

    const [type, settype] = useState("");
    const [img, setImg] = useState("");
    const [from, setfrom] = useState("");
    const [to, setto] = useState("");
    const [fromlocation, setfromlocation] = useState("");
    const [tolocation, settolocation] = useState("");
    const [departureTime, setdepartureTime] = useState("");
    const [CusName, setCusName] = useState("");
    const [CusNIC, setCusNIC] = useState("");
    const [cusId, setcusId] = useState("");
    const [bookdate, setBookdate] = useState("");
    const [traintime, setTraintime] = useState("");
    const [noOfTickets, setnoOfTickets] = useState("");
    const [TrainClass, settrainClass] = useState("");
    const [total, settotal] = useState("750.00");
    const [trainId, settrainId] = useState("");
    const [trainName, settrainName] = useState("");

    useEffect(() => {
        const id = localStorage.getItem("token");

        if (id !== null || id !== undefined) {
            setcusId(id);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a data object with the form values
        const data = {
            "cusName": CusName,
            "cusNIC": CusNIC,
            "cusId": cusId,
            "bookdate": bookdate,
            "from": fromlocation,
            "to": tolocation,
            "traintime": departureTime,
            "noOfTickets": noOfTickets,
            "trainClass": TrainClass,
            "total": total,
            "trainId": trainId,
            "trainName": trainName
        };

        try {
            const response = await axios.post(
                "http://localhost:5068/api/booking",
                data
            );

            alert("Booking Added Successfully");

            // Handle the response as needed
            console.log("Server response:", response.data);
            window.location.href = "/mybookings";

            // Clear the form fields after successful submission
            setBookdate("");
            setnoOfTickets("");
            settolocation("");
            setfromlocation("");
            setCusName("");
            setCusNIC("");
            settrainClass("");

        } catch (error) {
            // Handle any errors that occur during the POST request
            console.error("Error:", error);
        }

    };

    useEffect(() => {
        getTrainDetails();
    }, [])

    const getTrainDetails = async () => {
        const id = window.location.pathname.split("/")[2];
        const response = await axios.get(`http://localhost:5068/api/trains/${id}`);
        console.log(response.data);
        settrainName(response.data.trainName);
        settrainId(response.data.id);
        settype(response.data.type);
        setImg(response.data.imageURL);
        setfrom(response.data.from);
        setto(response.data.to);
        setdepartureTime(response.data.departureTime);
    }
    useEffect(() => {
        const userInfo = localStorage.getItem("name");

        if (userInfo == null) {
            alert("You need to login first");
            window.location.href = "/login";

        }
    }, []);
    return (
        <div className="bookingcss" >

            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-11">
                        <div class="card card0 rounded-0">
                            <div class="row">
                                <div class="col-md-5 d-md-block d-none box">
                                    <div class="righta " style={{ backgroundColor: "white", border: "0px", paddingLeft: '10px' }}>

                                        <div class="text-center mb-2"> <h2>Your Reservation Details</h2> </div>
                                        <hr class="text-center mb-4" />
                                        <h4 style={{ color: "hsl(0,0%,0%,0.6)" }}>{trainName}</h4>
                                        <div >
                                            <div class="col-12 "><img class="img-fluid" src={`${img}`} style={{ height: "200px", width: "100%", objectFit: 'cover' }} /></div>
                                        </div>
                                        <hr />
                                        <div class="row lower">
                                            <div class="col text-lefta">Train Type</div>
                                            <div class="col text-righta">{type}</div>
                                        </div>
                                        <div class="row lower">
                                            <div class="col text-lefta">From Location</div>
                                            <div class="col text-righta">{from}</div>
                                        </div>
                                        <div class="row lower">
                                            <div class="col text-lefta">To Location</div>
                                            <div class="col text-righta">{to}</div>
                                        </div>
                                        <hr />
                                        <div class="row lower">
                                            <div class="col text-lefta"><b>Total Price</b></div>
                                            <div class="col text-righta"><b>Rs. {total}</b></div>
                                        </div>
                                        <br />
                                        <p class="text-muted text-center">Apply Terms and Condition</p>
                                    </div>
                                </div>
                                <div class="col-md-7 col-sm-12 p-0 box">
                                    <form onSubmit={handleSubmit}>
                                        <div class="card rounded-0 border-0 card2" id="paypage" style={{ marginLeft: '5%' }}>
                                            <div class="form-card">

                                                <div className="tabcard">
                                                    <div class="">

                                                        <ul class="nav nav-pills mb-3 shadow-sm" id="pills-tab" role="tablist">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" id="bookingDetails-tab" data-toggle="pill" href="#bookingDetails" role="tab" aria-controls="bookingDetails" aria-selected="true">Booking Details</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" id="payment-tab" data-toggle="pill" href="#payment" role="tab" aria-controls="payment" aria-selected="false">Payment Details</a>
                                                            </li>
                                                        </ul>


                                                        <div class="tab-content" id="pills-tabContent p-3">

                                                            <div class="tab-pane fade show active" id="bookingDetails" role="tabpanel" aria-labelledby="bookingDetails-tab">
                                                                <label class="pay">Customer Name</label>
                                                                <input type="text" name="holdername" placeholder="Customer Name" required onChange={(e) => { setCusName(e.target.value) }} />

                                                                <label class="pay">NIC / Passport / Driving License</label>
                                                                <input type="text" name="CusNIC" required placeholder="NIC / Passport / Driving License" onChange={(e) => { setCusNIC(e.target.value) }} />

                                                                <div class="row">
                                                                    <div class="col-8 col-md-4">
                                                                        <label class="pay">Book Date</label>
                                                                        <input required type="date" name="cardno" id="cr_no" onChange={(e) => { setBookdate(e.target.value) }} />
                                                                    </div>
                                                                    <div class="col-4 col-md-4">
                                                                        <label class="pay">Number of Seats</label><br />
                                                                        <select required name="cvcpwd" class="placeicon" onChange={(e) => { setnoOfTickets(e.target.value) }} style={{ width: '100%', height: '43px' }}>
                                                                            <option value="1">1 Seat</option>
                                                                            <option value="2">2 Seats</option>
                                                                            <option value="3">3 Seats</option>
                                                                            <option value="4">4 Seats</option>
                                                                        </select>
                                                                    </div>

                                                                    <div class="col-4 col-md-4">
                                                                        <label class="pay">Class</label><br />
                                                                        <select onChange={(e) => { settrainClass(e.target.value) }} required name="cvcpwd" class="placeicon" style={{ width: '100%', height: '43px' }}>
                                                                            <option value="1">First Class</option>
                                                                            <option value="2">Second Class</option>
                                                                            <option value="3">Third Class</option>
                                                                        </select>
                                                                    </div>

                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-8 col-md-6">
                                                                        <label class="pay">From Location</label>
                                                                        <input required type="text" name="cardno" id="cr_no" onChange={(e) => { setfromlocation(e.target.value) }} placeholder="From Location" />
                                                                    </div>
                                                                    <div class="col-4 col-md-6">
                                                                        <label class="pay">To Location</label>
                                                                        <input required type="text" name="cvcpwd" onChange={(e) => { settolocation(e.target.value) }} placeholder="To Location" class="placeicon" />
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-md-6">
                                                                        <a class="btn btn-info placeicon w-100" id="payment-tab" data-toggle="pill" href="#payment" role="tab" aria-controls="payment" aria-selected="false">NEXT &nbsp; &#xf178;</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                                                                <h2 id="heading2" class="text-danger">Payment Method</h2>
                                                                <div class="radio-group">
                                                                    <div class='radio' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" width="200px" height="60px" /></div>
                                                                    <div class='radio' data-value="paypal"><img src="https://i.imgur.com/5QFsx7K.jpg" width="200px" height="60px" /></div>
                                                                    <br />
                                                                </div>
                                                                <label class="pay">Name on Card</label>
                                                                <input required type="text" name="holdername" placeholder="Card Holder's Name" />
                                                                <div class="row">
                                                                    <div class="col-8 col-md-6">
                                                                        <label class="pay">Card Number</label>
                                                                        <input required type="text" name="cardno" id="cr_no" placeholder="0000-0000-0000-0000" minlength="16" maxlength="16" />
                                                                    </div>
                                                                    <div class="col-4 col-md-6">
                                                                        <label class="pay">CVV</label>
                                                                        <input required type="password" name="cvcpwd" placeholder="&#9679;&#9679;&#9679;" class="placeicon" minlength="3" maxlength="3" />
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <label class="pay">Expiration Date</label>
                                                                    </div>
                                                                    <div class="col-md-12">
                                                                        <input required type="text" name="exp" id="exp" placeholder="MM/YY" minlength="5" maxlength="5" />
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-md-6">

                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <input type="submit" value="MAKE A PAYMENT &nbsp; &#xf178;" class="btn btn-success placeicon" style={{ width: '100%', color: 'white' }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookingCreate