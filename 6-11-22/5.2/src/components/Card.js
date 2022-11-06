import styles from './Card.css';

function Card ({myClass,imageLink,title,description }) {
    return (
        <div>
            <div className={myClass}>
            <img src={imageLink}/>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
        </div>
    )
}
export default Card


// function Card ({myClass,imageLink,title,description }) {
//     return (
//         <div>
//             <div className={myClass}>
//             <img src={imageLink}/>
//             <h1>{title}</h1>
//             <p>{description}</p>
//             </div>
//         </div>
//     )
// }
