import { useState, useEffect } from "react";
import AddButton from "./components/AddButton";
import Date from "./components/Date";
import Status from "./components/Status";
import TaskList from "./components/TaskList";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("./tasks.json")
            .then((task) => task.json())
            .then((taskJSON) => setTasks(taskJSON));
    }, []);

    const total = tasks.length;
    const done = tasks.filter((task) => task.isDone).length;
    const remaining = total - done;

    const handleToggle = (id) => {
        const updateTasks = tasks.map((task) => {
            return task.id == id ? { ...task, isDone: !task.isDone } : task;
        });
        setTasks(updateTasks);
    };

    const handleDelete = (id) => {
        const updateTasks = tasks.filter((task) => id != task.id);
        setTasks(updateTasks);
    };

    return (
        <div className="mx-auto my-4 max-w-sm overflow-hidden rounded-2xl shadow-2xl select-none">
            <div className="bg-gradient-to-tr from-[#0891b2] via-[#1d4ed8] to-[#3730a3] p-2">
                <Date />
                <Status total={total} remaining={remaining} done={done} />
            </div>
            <div className="px-4 py-3">
                <h1 className="py-2 text-center text-xl font-medium text-slate-400">
                    <span className="font-semibold text-slate-600">Tasks</span>{" "}
                    for Today
                </h1>
                {tasks.length ? (
                    <TaskList
                        data={tasks}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                ) : (
                    <h1 className="my-6 text-center text-2xl font-medium text-slate-700">
                        No Task for Today 😊
                    </h1>
                )}

                <AddButton />
            </div>
        </div>
    );
}

export default App;
