function Film({ item, sess }) {

  let halls = []
  sess.forEach(element => {
    halls.push(element.hall_id);
  });
  halls = Array.from(new Set(halls))


  let film_sess = new Map();
  halls.forEach(element => {
    film_sess.set(element, sess.filter(s => s.hall_id === element));
  });

  return (

    <section className="movie">
      <div className="movie__info">
        <div className="movie__poster">
          <img className="movie__poster-image" src="https://abh.ai/random/400/400" />
        </div>
        <div className="movie__description">
          <h2 className="movie__title">{item.title}</h2>
          <p className="movie__data">
            <span className="movie__data-duration">{item.duration} минут</span>
          </p>
        </div>
      </div>


      {Array.from(film_sess).map((el) => (
        <div className="movie-seances__hall">
          <h3 className="movie-seances__hall-title"> Зал {el[0]}</h3>
          <ul className="movie-seances__list">
            {el[1].map((session) => (
              <li key={session.id} className="movie-seances__time-block">
                <button
                  className="movie-seances__time"
                  // onClick={() => handleClick(session.session_id)}
                >
                  {session.start_at.split(' ')[1]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}

    </section>

  );
}

export default Film;


