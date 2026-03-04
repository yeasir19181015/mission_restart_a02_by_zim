
// import './App.css'
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ticketsData from "./data/tickets";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketSection from "./components/TicketSection";
import Footer from "./components/Footer";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "./utils/localStorage";

function App() {
  const [tickets, setTickets] = useState(() => {
    return loadFromLocalStorage("tickets") || ticketsData;
  });

  const [taskStatus, setTaskStatus] = useState(() => {
    return loadFromLocalStorage("taskStatus") || [];
  });

  const [resolvedTasks, setResolvedTasks] = useState(() => {
    return loadFromLocalStorage("resolvedTasks") || [];
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    saveToLocalStorage("tickets", tickets);
  }, [tickets]);

  useEffect(() => {
    saveToLocalStorage("taskStatus", taskStatus);
  }, [taskStatus]);

  useEffect(() => {
    saveToLocalStorage("resolvedTasks", resolvedTasks);
  }, [resolvedTasks]);

  const handleAddToTask = (ticket) => {
    const alreadyAdded = taskStatus.find((t) => t.id === ticket.id);
    if (alreadyAdded) return;
    setTaskStatus([...taskStatus, ticket]);
    setTickets(
      tickets.map((t) =>
        t.id === ticket.id ? { ...t, status: "in-progress" } : t
      )
    );
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