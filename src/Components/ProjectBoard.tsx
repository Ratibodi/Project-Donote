import WorkCard from "./workCard";

type work = {
  id: number;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
};

const tasks: work[] = [
  {
    id: 1,
    title: "Design Landing Page",
    description: "Create UI in Figma",
    status: "todo",
  },
  {
    id: 2,
    title: "Setup Database",
    description: "Connect MongoDB",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Deploy App",
    description: "Deploy to Vercel",
    status: "done",
  },
];

export default function ProjectBoard() {
  const todo = tasks.filter((task) => task.status === "todo");
  const inProgress = tasks.filter((task) => task.status === "in-progress");
  const done = tasks.filter((task) => task.status === "done");

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {/* TODO COLUMN */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="font-bold mb-4">Todo</h2>
        <div className="space-y-4">
          {todo.map((task) => (
            <WorkCard
              key={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
            />
          ))}
        </div>
      </div>

      {/* IN PROGRESS COLUMN */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="font-bold mb-4">In Progress</h2>
        <div className="space-y-4">
          {inProgress.map((task) => (
            <WorkCard
              key={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
            />
          ))}
        </div>
      </div>

      {/* DONE COLUMN */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="font-bold mb-4">Done</h2>
        <div className="space-y-4">
          {done.map((task) => (
            <WorkCard
              key={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}