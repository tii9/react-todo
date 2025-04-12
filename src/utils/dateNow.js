const dateNow = () => {
    const dayInWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const monthInYear = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const d = new Date();
    const day = dayInWeek[d.getDay()];
    const month = monthInYear[d.getMonth()];
    let date = d.getDay();

    if (date == 1) date = `${date}st`;
    else if (date == 2) date = `${date}nd`;
    else date = `${date}th`;

    return { day, month, date };
};

export default dateNow;
