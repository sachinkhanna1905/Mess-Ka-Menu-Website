
import React,{ useState} from 'react'
import "./style.css"

// To use Menu 
// menuApi or menuApi.js both are correct 
//import Menu from "./menuApi.js"
// To use MenuCard.js
import Menucard from "./MenuCard.js"
import Menu from "./menuApi"
import Navbar from './Navbar'

//const [menuData,setMenuData]= useState(Menu);
// use menuData we can send data from one component to another component
// parent to child / top to bottom (prop drilling problem)

const Resturant = () => {
  // using useState to store or hold the data  of the menuApi.js 
  const [menuData,setMenuData]=useState(Menu);

  // after clicking on button . how the data will filter 
  // after clickking on the button. Category data will be send the onfunction function.
  const filterItem = (cat) =>{
      const updated_Menu_List = Menu.filter((filter_APi_data)=>{
        return filter_APi_data.category===cat;
      })
      // updating our menuApi data as per client request 
       setMenuData(updated_Menu_List);
  }
  // if we click on the "all" button. then show data which was declared in the menuApi.js
  const filterAll=()=>{
    setMenuData(Menu);
  }
  return (
   <React.Fragment>
      {/* sending the data to another component . */}
      {/* data which was stored in the hooks  */}
      {/* using proops to filter */}
      {/* using proops to send the "function" */}
      < Navbar filter_Item={filterItem} filter_All={filterAll}/>
      {/* using proops to send the data from parent component to child component */}
      <Menucard  menuAPi_data={menuData}/>
   </React.Fragment>
  )
}

export default Resturant