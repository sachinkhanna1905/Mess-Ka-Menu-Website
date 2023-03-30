import React from 'react'
import "./style.css"

const Navbar = ({filter_Item,filter_All}) =>{
    return (
         <React.Fragment>
      <nav className='navbar'>
        <div className='btn-group'>
          <button className='btn-group__item' 
          onClick={()=>filter_Item('Breakfast')}>Breakfast</button>
          <button className='btn-group__item'
          onClick={()=>filter_Item('lunch')}>lunch</button>
          <button className='btn-group__item'
          onClick={()=>filter_Item('Evening')}>Evening</button>
          <button className='btn-group__item'
          onClick={()=>filter_Item('Dinner')}>Dinner</button>
          <button className='btn-group__item'
          onClick={()=>filter_All()}>All</button>
        </div>
      </nav>
         </React.Fragment>
    )
}

export default Navbar;

