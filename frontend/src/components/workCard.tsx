type workCardProps = {
  title: string;
  description: string;
  status?: "todo" | "in-progress" | "done";
};

export default function TaskCard({
  title,
  description,
  status = "todo",
}: workCardProps) {
  const statusColor =
    status === "done"
      ? "bg-green-100 text-green-600"
      : status === "in-progress"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-gray-100 text-gray-600";

  return (
    <div className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className={`text-xs px-2 py-1 rounded ${statusColor}`}>
          {status}
        </span>
      </div>

      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}