const Card = (props) => (
    <div className='card'>
        <div className='card_img_container'>
            <img className='card_img' src={props.img}/>
        </div>
        <h1>{props.heading}</h1>
        <p>{props.exp}</p>
    </div>
);

export default Card;