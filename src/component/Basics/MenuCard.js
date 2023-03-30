// We are creating MenuCard.js because 
// 1. instead of making same food div again and again 
//  we created menuApi.js and stored it data in => hooks (useState)
//  we can apply for loop on MenuCard.js => props 
// 2.  it will make our main code Resturant.js neat and clean
import React from 'react'
import "./style.css"


const MenuCard = ({ menuAPi_data }) => {
    console.log(menuAPi_data);
    return(
        <>
        <section className='main-card-container'>
          {/* using map so that we can add more recipe easliy to the menuApi.js   */}
          {menuAPi_data.map((current_menuApi_data) =>{
            // 1->2->3->4->5->6-> --------- ->n-1 
            //   de-structuring of objects s
            //const [ id ,name,category,image,description]=curElem;
            // {curElem.id] will be writen as {id}
           return(
               <React.Fragment>
                 <div className='card-container'>
                 <div className='card'>
                  <div  className='card-body'>
                      <span className='card-number card-circle subtle'>{current_menuApi_data.id}</span>
                      <span className='card-author subtle'>{current_menuApi_data.category}</span>
                      <h2 className='card-title'>{current_menuApi_data.name}</h2>
                      <span className='card-description subtle'>
                      {current_menuApi_data.description}
                      {/* <a hred="#">read more</a> */}
                      </span>
                      <div className='card-read'>Read</div>
                  </div>
                <img src={current_menuApi_data.image} alt="img" className='card-media'/>
                  
                  <span className='card-tag subtle'>order Now{current_menuApi_data.price}</span>
              </div>
          </div>
               </React.Fragment>
           )
          })}
        </section>
          
        </>
    )
}

export default MenuCard;