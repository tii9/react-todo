import dateNow from "../utils/dateNow";

const Date = () => {
    const { day, month, date } = dateNow();
    console.log(date);

    return (
        <>
            <h1 className="pt-2 text-center text-2xl leading-none font-semibold text-white">
                {day}, {date}
            </h1>
            <h1 className="text-center text-lg font-normal text-white">
                {month},
            </h1>
        </>
    );
};

export default Date;
