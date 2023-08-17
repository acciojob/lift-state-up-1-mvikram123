import React from "react";





const Child=({props})=>{
   
   console.log(props)

   

    return(

        <div className="child">
            <h1>Child Component</h1>
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