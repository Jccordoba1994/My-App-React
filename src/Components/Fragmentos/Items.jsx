import './Items.css'
const Items = ({title, imageurl, price, stock}) => {
    return (
        <div className="card border-primary mb-3" style={{maxWidth: '15rem', margin: '5px'}}>
        <div className="card-header">{title}</div>
        <div className="card-body">
            <img className="imagenes" src={imageurl} alt="" />
            <p className="card-text"> ${price}</p>
            <button className='boton'>Detalles del producto</button>
            <p className="card-text1"> Stock: {stock}</p>
        </div>
    </div>
    );
}

export default Items;


