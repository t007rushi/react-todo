import React from "react"
import reactlogo from '../images/react.png'

function Home(){
    return (
<div>
    <img 
    src = {reactlogo} alt = "img" width = "100px" 
    />
    <h1> Fun Facts about React</h1>
    <ul>
    <li>was first released in 2013</li>
    <li>created by jordan</li>
    <li>100k stars on github</li>
    <li>facebook</li> 

    <li>power thousands of web apps ,also mobile one</li>
    </ul>
    
    </div>
    )
}

export default Home