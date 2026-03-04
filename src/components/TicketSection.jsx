import TicketCard from "./TicketCard";
import TaskStatus from "./TaskStatus";

export default function TicketSection({
  tickets,
  taskStatus,
  resolvedTasks,
  onAddToTask,
  onComplete,
}) {
  return (
    <div className="px-6 py-8 bg-gray-100">
      <div className="flex gap-6">
        {/* Left Side - Customer Tickets */}
        <div className="flex-1">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Customer Tickets
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                taskStatus={taskStatus}
                onAddToTask={onAddToTask}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Task Status */}
        <TaskStatus
          taskStatus={taskStatus}
          resolvedTasks={resolvedTasks}
          onComplete={onComplete}
        />
      </div>
    </div>
  );
}