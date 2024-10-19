import Sess from './Sess';
function Film({ item, sess }) {

  let halls = []
  sess.filter((s)=>s.movie_id === item.id).forEach(element => {
    halls.push(element.hall_id);    
  });
  halls = Array.from(new Set(halls))
  

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
      <div className="movie-seances__hall">
        <h3 className="movie-seances__hall-title">Зал 1</h3>



        {sess.filter((s) => s.movie_id === item.id).map((s) => {
          return <Sess
            sess={s}
            key={s.id}
          />
        })}

      </div>
    </section>

  );
}

export default Film;