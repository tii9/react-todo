import { useState, useEffect } from "react";
import AddButton from "./components/AddButton";
import Date from "./components/Date";
import Status from "./components/Status";
import TaskList from "./components/TaskList";
import AddDataForm from "./components/AddDataForm";

function App() {
    const [tasks, setTasks] = useState([]);
    const [formPopUp, setFormPopUp] = useState(false);
    const [taskID, setTaskID] = useState(0);

    useEffect(() => {
        fetch("./tasks.json")
            .then((task) => task.json())
            .then((taskJSON) => {
                setTasks(taskJSON);
                setTaskID(Math.max(...taskJSON.map((task) => task.id)) + 1);
            });
    }, []);

    useEffect(() => {
        if (formPopUp) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [formPopUp]);

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

    const handleNewTask = (inputValue) => {
        if (inputValue == "") return;
        handleFormPopUp();
        setTasks([
            ...tasks,
            {
                id: taskID,
                task: inputValue,
                isDone: false,
            },
        ]);
        setTaskID(taskID + 1);
    };

    const handleFormPopUp = () => {
        setFormPopUp(!formPopUp);
    };

    return (
        <>
            <div className="mx-auto my-4 max-w-sm overflow-hidden rounded-2xl shadow-2xl select-none">
                <div className="bg-gradient-to-tr from-[#0891b2] via-[#1d4ed8] to-[#3730a3] p-2">
                    <Date />
                    <Status total={total} remaining={remaining} done={done} />
                </div>
                <div className="px-4 py-3">
                    <h1 className="py-2 text-center text-xl font-medium text-slate-400">
                        <span className="font-semibold text-slate-600">
                            Tasks
                        </span>{" "}
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

                    <AddButton onFormPopUp={handleFormPopUp} />
                </div>
            </div>
            {formPopUp && (
                <AddDataForm
                    onFormPopUp={handleFormPopUp}
                    onNewTask={handleNewTask}
                />
            )}
        </>
    );
}

export default App;
