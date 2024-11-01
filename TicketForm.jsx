import { useState } from "react";

function TicketForm({ addTicket }) {
  const [name, setName] = useState("");
  const [seat, setSeat] = useState("");
  const [date, setDate] = useState("");
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const ticketId = "T" + Math.floor(Math.random() * 10000);
    addTicket({ ticketId, name, seat, date, departure, destination });
    alert(`Ticket with ID ${ticketId} has been booked successfully.`);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setSeat("");
    setDate("");
    setDeparture("");
    setDestination("");
  };

  return (
    <div className="ticket-section">
      <form onSubmit={handleSubmit}>
        <h2>Ticket Management System</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Seat No"
          value={seat}
          onChange={(e) => setSeat(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Departure Point"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <input type="submit" value="Book Ticket" />
      </form>
    </div>
  );
}

export default TicketForm;
