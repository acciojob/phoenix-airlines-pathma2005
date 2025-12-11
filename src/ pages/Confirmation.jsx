import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Confirmation() {
  const { bookingData } = useSelector((s) => s.flights);

  return (
    <div>
      <h2>Booking Confirmed!</h2>

      <p>Name: {bookingData.user?.name}</p>
      <p>Email: {bookingData.user?.email}</p>
      <p>Flight: {bookingData.flight?.name}</p>

      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
}
