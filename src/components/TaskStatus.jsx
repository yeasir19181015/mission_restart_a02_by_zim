import { toast } from "react-toastify";

export default function TaskStatus({ taskStatus, resolvedTasks, onComplete }) {
  const handleComplete = (ticket) => {
    onComplete(ticket);
    toast.success("Task completed and resolved!");
  };

  return (
    <div className="w-full">
      {/* Task Status */}
      <h2 className="text-lg font-bold text-gray-900 mb-3">Task Status</h2>

      {taskStatus.length === 0 ? (
        <p className="text-sm text-gray-400 mb-6">
          Select a ticket to add to Task Status
        </p>
      ) : (
        <div className="flex flex-col gap-3 mb-6">
          {taskStatus.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <p className="text-sm font-semibold text-gray-900 mb-3">
                {ticket.title}
              </p>
              <button
                className="w-full py-2 rounded-lg text-white text-sm font-semibold cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #02A53B, #02A53B)",
                }}
                onClick={() => handleComplete(ticket)}
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Resolved Task */}
      <h2 className="text-lg font-bold text-gray-900 mb-3">Resolved Task</h2>

      {resolvedTasks.length === 0 ? (
        <p className="text-sm text-gray-400">No resolved tasks yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {resolvedTasks.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-blue-50 rounded-xl p-4"
            >
              <p className="text-sm font-semibold text-gray-900">
                {ticket.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}