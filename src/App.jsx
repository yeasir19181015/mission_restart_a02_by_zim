
// import './App.css'

import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ticketsData from "./data/tickets";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketSection from "./components/TicketSection";
import Footer from "./components/Footer";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const handleAddToTask = (ticket) => {
    const alreadyAdded = taskStatus.find((t) => t.id === ticket.id);
    if (alreadyAdded) return;
    setTaskStatus([...taskStatus, ticket]);
    setTickets(tickets.map((t) =>
      t.id === ticket.id ? { ...t, status: "in-progress" } : t
    ));
  };

  const handleComplete = (ticket) => {
    setTaskStatus(taskStatus.filter((t) => t.id !== ticket.id));
    setResolvedTasks([...resolvedTasks, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
      <Banner
        inProgressCount={taskStatus.length}
        resolvedCount={resolvedTasks.length}
      />
      <TicketSection
        tickets={tickets}
        taskStatus={taskStatus}
        resolvedTasks={resolvedTasks}
        onAddToTask={handleAddToTask}
        onComplete={handleComplete}
      />
      <Footer />
    </div>
  );
}

export default App;