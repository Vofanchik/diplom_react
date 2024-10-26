function return_days_week() {
    const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    let today = new Date();
    let currentDayIndex = today.getDay();
    let currentDay = today.getDate();
    let LastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    let weekDaysFromToday = [];

    for (let i = currentDayIndex; i < currentDayIndex + 7; i++) {
        let dayIndex = i % 7;
        weekDaysFromToday.push(daysOfWeek[dayIndex]);
    }

    const dates = [];

    for (let i = currentDay; i <= LastDayOfMonth; i++) {
        const date = new Date(today.getFullYear(), today.getMonth(), i); 
        dates.push(date.toLocaleString('ru-RU', { day: 'numeric' }));
    }
    let i = 1;
    while (dates.length < 7) {
        dates.push(String(i))
        i++;
    }
    weekDaysFromToday = weekDaysFromToday.map((key, index) => ([ key, dates[index]]));
    console.log(weekDaysFromToday);
    
    return weekDaysFromToday
}

let weekDaysFromToday = return_days_week()

let frst = true


function Calendar({ films, sess }) {
    return (
        <nav className="page-nav">
            {weekDaysFromToday.map((day) => {
                if (day[1] == new Date().getDate()) {
                    
                    return <a key={day[1]} className="page-nav__day page-nav__day_today page-nav__day_chosen">
                    <span className="page-nav__day-week">{day[0]}</span><span className="page-nav__day-number">{day[1]}</span>
                </a>
                
                }
                else{
                    return <a key={day[1]} className="page-nav__day">
                    <span className="page-nav__day-week">{day[0]}</span><span className="page-nav__day-number">{day[1]}</span>
                </a>
                }
            })}

        </nav>

    );
}

export default Calendar;