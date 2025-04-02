import { useEffect, useState } from 'react'
import './products.css'
import { productsProps } from './ProductsCard/ProductsCard'
import ProductsCard from './ProductsCard/ProductsCard'
const Products = () => {

    const [products, setProducts] = useState<productsProps[]>([])


    const fetchProducts =async()=>{
        const response = await fetch('/products.json')
        const data = await response.json()
        console.log(data)
        setProducts(data)
    }

    useEffect(()=>{
        fetchProducts()
    },[])

  return (
    <section className="products container" id="products">
    <h2 className="section__title">
        Products
    </h2>

    <div className="products__container grid">
        {
            products.map(item=>(
                <ProductsCard item={item}></ProductsCard>
            ))
        }
        
    </div>
</section>
  )
}

export default Products