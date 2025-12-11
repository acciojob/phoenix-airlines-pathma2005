import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchData, setSelectedFlight } from "../redux/flightsSlice";
import { useNavigate } from "react-router-dom";

export default function FlightSearch() {
  const [type, setType] = useState("one-way");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const flights = [
    { id: 1, name: "Phoenix Air 101", price: 4500 },
    { id: 2, name: "Phoenix Air 202", price: 5200 }
  ];

  const handleSearch = () => {
    if (!source || !destination || !date) {
      alert("All fields required!");
      return;
    }

    dispatch(setSearchData({ type, source, destination, date }));
  };

  const handleBook = (flight) => {
    dispatch(setSelectedFlight(flight));
    navigate("/flight-booking");
  };

  return (
    <div>
      <h2>Flight Search</h2>

      <select onChange={(e) => setType(e.target.value)}>
        <option value="one-way">One Way</option>
        <option value="round-trip">Round Trip</option>
      </select>

      <input
        type="text"
        placeholder="Source"
        onChange={(e) => setSource(e.target.value)}
      />

      <input
        type="text"
        placeholder="Destination"
        onChange={(e) => setDestination(e.target.value)}
      />

      <input type="date" onChange={(e) => setDate(e.target.value)} />

      <button onClick={handleSearch}>Search</button>

      <h3>Available Flights</h3>

      {flights.map((f) => (
        <div key={f.id}>
          <p>{f.name} — Rs {f.price}</p>
          <button
            className="book-flight"
            onClick={() => handleBook(f)}
          >
            Book Flight
          </button>
        </div>
      ))}
    </div>
  );
}
