import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("Enter Your Text");
    const [uText, setUtext ]= useState("");

    const makeUpper =() => {
        let n = text.toUpperCase();
        setUtext(n)
    }

    const onchangehandler = (event)=>{
        setText(event.target.value)
    }
    return (
        <>
            <div className="container my-4">
                <h1>
                    {props.heading}
                </h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={onchangehandler} value={text} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary" onClick={makeUpper}> Convert to Uppercase </button>

                {uText}
            </div>

        </>
    )
}
