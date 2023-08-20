import React,{useState} from "react";
import Child from "./Child";



const Parent=()=>{
    let[showModal,setShowModal]=useState(false)

    const onClickHandle=()=>{


        setShowModal(true)
    }

    return(


        <div className="parent">
            <h1>Parent Component</h1>
            <Child  showModal={showModal} onClickHandle={onClickHandle} />
        </div>
    )
}

export default Parent;