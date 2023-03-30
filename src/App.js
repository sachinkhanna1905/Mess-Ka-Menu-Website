import React from 'react'
// importing Resturant within same folder that why we are using "./"
import Resturant from "./component/Basics/Resturant"
// no need to write Resturant.js
const App = () => {
  return (
    <div>
   <Resturant/>
    </div>
  )
}

export default App