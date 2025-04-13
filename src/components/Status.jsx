const Status = ({ total, remaining, done }) => {
    return (
        <div className="flex justify-between px-4 pt-10 pb-2">
            <div className="flex flex-col items-center text-white">
                <h1 className="text-2xl font-bold">{total || 0}</h1>
                <h2 className="text-lg">Total</h2>
            </div>
            <div className="flex flex-col items-center text-lg text-white">
                <h1 className="text-2xl font-bold">{remaining || 0}</h1>
                <h2 className="text-lg">Remaining</h2>
            </div>
            <div className="flex flex-col items-center text-lg text-white">
                <h1 className="text-2xl font-bold">{done || 0}</h1>
                <h2 className="text-lg">Done</h2>
            </div>
        </div>
    );
};

export default Status;
