import Film from './Film';

function Films({ films, sess }) {
    return (
        <div className="Films">
            { films.map((item) => {
                return <Film
                    item={item}
                    key={item.id}
                    sess={sess}
                />
            }) }
        </div>
    );
}

export default Films;