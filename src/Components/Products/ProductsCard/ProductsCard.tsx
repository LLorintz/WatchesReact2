import './productscard.css'

export type productsProps = {
    title: string,
    price: number,
    image: string
}

type productItem = {
    item:productsProps
}


const ProductsCard = ({item}:productItem) => {
  return (
    <article className="products__card">
            <img src={item.image} alt="" className="products__img"/>

            <h3 className="products__title">{item.title}</h3>
            <span className="products__price">${item.price}</span>

            <button className="products__button">
                <i className='bx bx-shopping-bag'></i>
            </button>
        </article>
        )
}

export default ProductsCard