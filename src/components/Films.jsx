import Film from './Film';

function Films({ films, sess, selectedDate }) {
    return (
        <div className="Films">
            { films.map((item) => {
                return <Film
                    item={item}
                    key={item.id}
                    sess={sess.filter((s) => s.movie_id === item.id)}
                    
                />
            }) }
        </div>
    );
}

export default Films;