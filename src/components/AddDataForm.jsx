import { useState } from "react";

const AddDataForm = ({ onFormPopUp, onNewTask }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="fixed top-0 left-0 flex min-h-screen min-w-full flex-1 items-center justify-center bg-gray-400/90">
            <div className="animate__animated animate__fadeInDown flex w-[90%] flex-col rounded-xl bg-white p-4 opacity-100 shadow-xl sm:max-w-md">
                <span
                    onClick={onFormPopUp}
                    className="material-symbols-outlined w-fit cursor-pointer self-end font-semibold transition-colors duration-200 hover:text-red-600"
                >
                    close
                </span>
                <p className="pb-2 text-2xl font-medium">Add New Task </p>
                <div className="flex flex-col gap-4">
                    <input
                        value={inputValue}
                        onChange={handleInputValue}
                        type="text"
                        name="new-task"
                        id="new-task"
                        className="rounded-md border px-2 py-1 text-lg"
                        autoComplete="false"
                    />
                    <button
                        onClick={() => onNewTask(inputValue)}
                        className="w-fit cursor-pointer self-end rounded-lg bg-gradient-to-tr from-[#0891b2] via-[#1d4ed8] to-[#3730a3] px-2 py-1 font-medium text-white"
                    >
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddDataForm;
