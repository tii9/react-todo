const Task = ({ id, task, isDone, onToggle, onDelete }) => {
    return (
        <div className="flex justify-between py-2">
            <div className="flex text-wrap">
                <input
                    type="checkbox"
                    name="task"
                    id={id}
                    className="peer"
                    checked={isDone}
                    onChange={() => onToggle(id)}
                />
                <span className="ps-5 font-medium text-wrap transition duration-300 peer-checked:ps-7 peer-checked:text-slate-400 peer-checked:italic peer-checked:line-through">
                    {task}
                </span>
            </div>
            <span
                className="material-symbols-outlined cursor-pointer hover:text-red-500"
                onClick={() => onDelete(id)}
            >
                delete
            </span>
        </div>
    );
};

export default Task;
