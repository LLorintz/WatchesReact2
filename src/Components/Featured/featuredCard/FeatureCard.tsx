import './featurecard.css'
export type watchProps = {
    image: "/img/featured2.png",
    title: "Ingersoll",
    price: 250
}

type watchItem = {
    item:watchProps
}


const FeatureCard = ({item}:watchItem) => {
  return (
    <div className="featured__card">
        <span className="featured__tag">Sale</span>
    
        <img src={item.image} alt="" className="featured__img"/>
    
        <div className="featured__data">
            <h3 className="featured__title">{item.title}</h3>
            <span className="featured__price">{item.title}</span>
        </div>
    
        <button className="button featured__button">ADD TO CART</button>
    </div>
  )
}

export default FeatureCard