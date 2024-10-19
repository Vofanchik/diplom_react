function Film({ item }) {

    return (
      
      <section className="movie">
      <div className="movie__info">
        <div className="movie__poster">
          <img className="movie__poster-image" src="https://abh.ai/random/400/400"/>
        </div>
        <div className="movie__description">
          <h2 className="movie__title">{ item.title }</h2>
          <p className="movie__data">
            <span className="movie__data-duration">{ item.duration } минут</span>
          </p>
        </div>
      </div>  
      </section>      

    );
  }
  
  export default Film;