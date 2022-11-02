import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("");
    const [uText, setUtext] = useState("");
    const [reverseText, setReverse] = useState("");
    
    const makeUpper = () => {
        let n = text.toUpperCase();
        setUtext(n)
    }

    const clear = () =>{
        setText("")
        setUtext("")
        setReverse("")
    }

    const makeReverse = ()=>{
        let textArray = text.split("")
        let reversedarray = textArray.reverse()
        let newText = reversedarray.join("")
        console.log(newText)
        setReverse(newText)
    }

    const reversewords = () =>{
        let textArray = text.split(" ")
        let reversedarray = textArray.reverse()
        let newText = reversedarray.join("")
        console.log(newText)
        setReverse(newText)
    }

    const onchangehandler = (event) => {
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

                <button className="btn btn-primary mx-1" onClick={makeUpper}> Convert to Uppercase </button>
                <button className="btn btn-primary mx-1" onClick={clear}> Clear </button>
                <button className="btn btn-primary mx-1" onClick={makeReverse}> Reverse Text </button>
                <button className="btn btn-primary mx-1" onClick={reversewords}> Reverse Words </button>
                
            </div>
            <div className="container my-3">
                <h1> Text Summary</h1>
                <p>
                    {text.split(' ').length } words and {text.length} characters
                </p>
                <p>
                    {reverseText}
                </p>
            </div>

        </>
    )
}
