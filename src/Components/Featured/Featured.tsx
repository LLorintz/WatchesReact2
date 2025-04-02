import { useEffect, useState } from 'react'
import './featured.css'
import { watchProps } from './featuredCard/FeatureCard'
import FeatureCard from './featuredCard/FeatureCard'

const Featured = () => {

const [watches, setWatches] = useState<watchProps[]>([])

const fetchWatches = async()=>{
    const response = await fetch('/featured.json')
    const data = await response.json()
    console.log(data)
    setWatches(data)
}

useEffect(()=>{
    fetchWatches()
},[])

  return (
    <section className="featured" id="featured">
    <h2 className="feature__title">
        Featured
    </h2>

    <div className="featured__container">
        {
            watches.map(item=>(
           <FeatureCard item={item}></FeatureCard>
            ))
        }
    </div>
</section>
  )
}

export default Featured