const Task = () => {
    return (
        <div className="flex justify-between py-2">
            <div className="flex text-wrap">
                <input type="checkbox" name="task" id="task" className="peer" />
                <span className="ps-5 font-medium text-wrap transition duration-300 peer-checked:ps-7 peer-checked:text-slate-400 peer-checked:italic peer-checked:line-through">
                    test
                </span>
            </div>
            <span className="material-symbols-outlined cursor-pointer hover:text-red-500">
                delete
            </span>
        </div>
    );
};

export default Task;
