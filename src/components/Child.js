import React from "react";
//import Parent from "./Parent";





const Child=(props)=>{
   
   console.log(props)

   

    return(

        <div className="child">
            <h2>Child Component</h2>
            <button onClick={props.onClickHandle}>Show Modal</button>
            {props.showModal && (
            <div>
               <h3>Model Content</h3>
               <p>this is the modal content</p>
            </div>

            )}

        </div>
    )
}

export default Child;