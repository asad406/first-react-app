
// const todoTitle = 'Call Family';
// const todoDesc = " ";
const dateName = new Date().getDate();
const monthName = new Date().getMonth();
const yearName = new Date().getFullYear();




function Card(props) {
    const {titleText, decText} = props;
    return <div className='card'>
                <h3 className='cardTitle'>{titleText}</h3>
                <h3 className='cardDes'>{decText}</h3>
                <p className='cardFooter'>{dateName + '/' + monthName + '/' + yearName}</p>
            </div>
}


export default Card;
