import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookingData } from "../redux/flightsSlice";
import { useNavigate } from "react-router-dom";

export default function FlightBooking() {

  const { selectedFlight } = useSelector((s) => s.flights);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBook = () => {
    if (!user.name || !user.email || !user.phone) {
      alert("All fields required!");
      return;
    }

    dispatch(setBookingData({ user, flight: selectedFlight }));
    navigate("/confirmation");
  };

  return (
    <div>
      <h2>Flight Booking</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
      />

      <button onClick={handleBook}>Confirm Booking</button>
    </div>
  );
}
