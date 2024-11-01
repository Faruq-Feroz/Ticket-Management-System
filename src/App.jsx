import { useState } from "react";
import TicketForm from "../TicketForm";
import TicketHistory from "../TicketHistory";

function App() {
  const [tickets, setTickets] = useState([]);

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  const deleteTicket = (ticketId) => {
    setTickets(tickets.filter((ticket) => ticket.ticketId !== ticketId));
  };

  return (
    <div className="container">
      <TicketForm addTicket={addTicket} />
      <TicketHistory tickets={tickets} deleteTicket={deleteTicket} />
    </div>
  );
}

export default App;
