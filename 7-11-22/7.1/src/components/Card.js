import styles from './Card.css';

function Card ({myClass,name,birthday,favMeats,favFishes }) {
    return (
        <div className={myClass} >

            <p>{name}</p>
            <p>{birthday}</p>
            <p>{favMeats}</p>
            <p>{favFishes}</p>
            
        </div>
    )
}
export default Card
