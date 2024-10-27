import return_days_week from "./Utils";

let weekDaysFromToday = return_days_week()



function Calendar({ week_now, onDateChanged }) {
    return (
        <nav className="page-nav">
            {weekDaysFromToday.map((day) => {

                return <button
                onClick={() => onDateChanged(day[1])}
                key={day[1]} className={`page-nav__day ${day[1] == new Date().getDate() ? 
                'page-nav__day_today' : ''} ${day[1] == week_now ? 
                'page-nav__day_chosen' : ''}`} >
                    <span className="page-nav__day-week">
                        {day[0]}</span><span className="page-nav__day-number">{day[1]}</span>
                        
                </button>

            })}

        </nav>

    );
}

export default Calendar;