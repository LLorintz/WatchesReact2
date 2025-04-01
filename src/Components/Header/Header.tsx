import 'boxicons/css/boxicons.min.css';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './header.css'

const Header = () => {

  const [theme, setTheme] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [cartVisible, setCartVisible] = useState(false);

  const handleSetToggle = (B:boolean)=>{
    setToggle(B)
 }



  useEffect(() => {
    if(theme)
    document.body.classList.add('dark-theme');
    else
    document.body.classList.remove('dark-theme');
  }, [theme]);

  return (
    <>
    <header className="header" id="header">
    <nav >
        <a href="#" className="nav__logo">
            <i className='bx bxs-watch nav__logo-icon'></i> Rolex
        </a>
        <div className={`nav__menu ${toggle?'show-menu':''}`} id="nav-menu">      
            <ul className="nav__list">
                {
                    ['Home', 'Featured', 'Products', 'New'].map((item,index)=>(
                    <li key={index} className="nav__item">
                        <a href={`#${item.toLowerCase()}`} className="nav__link active-link">{item}</a>
                    </li>
                    ))
                }           
            </ul>
            <div onClick={()=>handleSetToggle(false)} className="nav__close" id="nav-close">
                <i className='bx bx-x' ></i>
            </div>
        </div>
        <div className="nav__btns">           
            <i onClick={()=>setTheme(!theme)} className='bx bx-moon change-theme' id="theme-button"></i>
            <div className="nav__shop" id="cart-shop"  onClick={() => setCartVisible(true)}>
                <i className='bx bx-shopping-bag'></i>
            </div>
            <div onClick={()=>handleSetToggle(true)} className="nav__toggle" id="nav-toggle">
                <i className='bx bx-grid-alt' ></i>
            </div>
        </div>
    </nav>
</header>

 {cartVisible && <Cart isClosed={cartVisible} onClose={setCartVisible} />}
 </>
  )
}

export default Header