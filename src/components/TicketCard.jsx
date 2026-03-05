import { toast } from "react-toastify";
import { FaCalendarAlt } from "react-icons/fa";

export default function TicketCard({ ticket, onAddToTask, taskStatus }) {
  const isAdded = taskStatus.find((t) => t.id === ticket.id);

  const handleClick = () => {
    if (isAdded) {
      toast.warning("This ticket is already in Task Status!");
      return;
    }
    onAddToTask(ticket);
    toast.success("Ticket added to Task Status!");
  };

  const priorityColor = {
    high: "text-red-500",
    medium: "text-yellow-500",
    low: "text-green-500",
  };

  const statusBadge = {
    open: "bg-green-100 text-green-600",
    "in-progress": "bg-yellow-100 text-yellow-600",
  };

  const statusLabel = {
    open: "Open",
    "in-progress": "In- Progress",
  };

  return (
    <div
      className="bg-white rounded-xl p-3 md:p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleClick}
    >
      {/* Top Row */}
      <div className="flex items-start justify-between mb-2 gap-2">
        <h3 className="text-xs md:text-sm font-semibold text-gray-900">
          {ticket.title}
        </h3>
        <span
          className={`text-xs font-semibold px-2 md:px-3 py-1 rounded-full flex items-center gap-1 shrink-0 ${statusBadge[ticket.status]}`}
        >
          <span className="w-2 h-2 rounded-full bg-current inline-block"></span>
          {statusLabel[ticket.status]}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 mb-3 line-clamp-2">
        {ticket.description}
      </p>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between text-xs text-gray-400 gap-1 md:gap-0">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-gray-800 font-semibold">#{ticket.id}</span>
          <span className={`font-bold uppercase ${priorityColor[ticket.priority]}`}>
            {ticket.priority} priority
          </span>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-gray-600">{ticket.customer}</span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-gray-400" />
            {ticket.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
}