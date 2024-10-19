import Film from './Film';

function Films({ films }) {
    return (
        <div className="Films">
            { films.map((item) => {
                return <Film
                    item={item}
                    key={item.id}
                />
            }) }
        </div>
    );
}

export default Films;