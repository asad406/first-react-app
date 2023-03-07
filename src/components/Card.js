
// const todoTitle = 'Call Family';
// const todoDesc = " ";
const dateName = new Date().getDate();
const monthName = new Date().getMonth();
const yearName = new Date().getFullYear();




function Card(props) {
    return <div className='card'>
                <h3 className='cardTitle'>{props.titleText}</h3>
                <h3 className='cardDes'>{props.decText}</h3>
                <p className='cardFooter'>{dateName + '/' + monthName + '/' + yearName}</p>
            </div>
}


export default Card;
