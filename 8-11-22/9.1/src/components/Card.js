import styles from './Card.css';

function Card ({myClass,name,img,favTop }) {
    return (
        <div className={myClass} >

            <p>{name}</p>
            <p>{img}</p>
            <p>{favTop}</p>
            
            
        </div>
    )
}
export default Card
