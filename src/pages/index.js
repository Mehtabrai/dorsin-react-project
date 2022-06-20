// import { render } from "@testing-library/react"
import React from "react"
import {useState} from "react"

// Functional Component
function Myapp() {
    const [name,setname] = useState("Hello World")

const updatefunc =()=>{
        setname("Here is Updated Value")
    }
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={()=> updatefunc()}>Update</button>
        </div>
    )
}

// Class Component
// class Myapp extends React.Component {
//     constructor (){
//         super()
//         this.state={
//             value : "value"
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{
//                     this.state.value}</h1>
//             </div>
//         )
//     }

// }





export default Myapp;