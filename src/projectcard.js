const Projectcard = (props) => (
    <div className='card'>
        <div className='card_img_container'>
        <img className='card_img' src={props.img}/>
        </div>
        <h1 style={{fontFamily:"cursive"}}>{props.heading}</h1>
    </div>
);

export default Projectcard;