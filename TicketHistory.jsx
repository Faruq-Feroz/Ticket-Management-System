function TicketHistory({ tickets, deleteTicket }) {
  return (
    <div className="ticket-history">
      <h3>Ticket History</h3>
      <table id="history-table">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Name</th>
            <th>Seat No</th>
            <th>Date</th>
            <th>Departure Point</th>
            <th>Destination</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <tr key={ticket.ticketId}>
                <td>{ticket.ticketId}</td>
                <td>{ticket.name}</td>
                <td>{ticket.seat}</td>
                <td>{ticket.date}</td>
                <td>{ticket.departure}</td>
                <td>{ticket.destination}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      deleteTicket(ticket.ticketId);
                      alert(`Ticket with ID ${ticket.ticketId} has been deleted.`);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>No tickets available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TicketHistory;
