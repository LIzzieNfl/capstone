import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function CalendarView({ events, members }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const eventsForDay = events.filter((event) =>
    formatDate(selectedDate).includes(event.time.split(" ")[0])
  );

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>📆 Select a Day to View Events</h2>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Calendar onChange={setSelectedDate} value={selectedDate} />

        <div style={{ marginTop: "1.5rem", width: "100%", maxWidth: "600px" }}>
          <h3 style={{ textAlign: "center" }}>
            Events for {selectedDate.toDateString()}:
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {eventsForDay.length > 0 ? (
              eventsForDay.map((event, idx) => {
                const color = members.find(m => m.name === event.name)?.color || "#ccc";
                return (
                  <li key={idx} style={{
                    backgroundColor: color,
                    padding: "0.75rem 1rem",
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                    color: "#fff",
                    fontWeight: "bold",
                    boxShadow: "0 0 6px rgba(0,0,0,0.1)"
                  }}>
                    {event.name}: {event.task} — {event.time}
                  </li>
                );
              })
            ) : (
              <p style={{ textAlign: "center" }}>No events for this day.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
