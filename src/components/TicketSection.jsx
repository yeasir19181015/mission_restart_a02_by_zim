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
    <div className="px-4 md:px-6 py-6 md:py-8 bg-white">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Side - Customer Tickets */}
        <div className="flex-1">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Customer Tickets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <div className="w-full lg:w-72 shrink-0">
          <TaskStatus
            taskStatus={taskStatus}
            resolvedTasks={resolvedTasks}
            onComplete={onComplete}
          />
        </div>

      </div>
    </div>
  );
}