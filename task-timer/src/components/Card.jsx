function Card({title, color}){
    return(
        <div style = {{backgroundColor: color, padding: '16px'}}>
            <h3>{title}</h3>
        </div>
    )
}

export default Card;

