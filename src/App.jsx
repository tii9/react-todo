import AddButton from "./components/AddButton";
import Date from "./components/Date";
import Status from "./components/Status";
import Task from "./components/Task";

function App() {
    return (
        <div className="mx-auto my-4 max-w-sm overflow-hidden rounded-2xl shadow-2xl select-none">
            <div className="bg-gradient-to-tr from-[#0891b2] via-[#1d4ed8] to-[#3730a3] p-2">
                <Date />
                <Status />
            </div>
            <div className="px-4 py-3">
                <h1 className="py-2 text-center text-xl font-medium text-slate-400">
                    <span className="font-semibold text-slate-600">Tasks</span>{" "}
                    for Today
                </h1>
                <Task />
                <Task />
                <Task />

                <AddButton />
            </div>
        </div>
    );
}

export default App;
