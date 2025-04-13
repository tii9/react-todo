import Task from "./Task";

const TaskList = ({ data, onToggle, onDelete }) => {
    return (
        <>
            {data.map((dt) => {
                const { id, task, isDone } = dt;
                return (
                    <Task
                        key={id}
                        id={id}
                        task={task}
                        isDone={isDone}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                );
            })}
        </>
    );
};

export default TaskList;
