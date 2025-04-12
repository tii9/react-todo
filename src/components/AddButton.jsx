const AddButton = () => {
    return (
        <button className="mx-auto my-3 flex cursor-pointer gap-1 rounded-full bg-gradient-to-tr from-[#0891b2] via-[#1d4ed8] to-[#3730a3] px-4 py-2 font-medium text-white">
            <span className="material-symbols-outlined font-semibold">add</span>
            <p>add new task</p>
        </button>
    );
};

export default AddButton;
