import React, { useState } from 'react'

export default function About(props) {
    let mystyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white'
    }

    {/*const [mystyle,setStyle]=useState({
        color:"black",
        backgroundColor:"white"
    })

    const [btntext,setbtn]=useState("Enable Dark mode")

    const toggelstyle=()=>{
        if(mystyle.color ==="black"){
            setStyle({
                color:"white",
                backgroundColor:"black"
            })
            setbtn("Enable Light mode")
        }
        else{
            setStyle({
                color:"black",
                backgroundColor:"white"
            })
            setbtn("Enable Dark mode")
        }
    }
*/}


    return (
        <div className='container' style={mystyle}>
            <h1>ABOUT US</h1>
            <p><strong>TextUtility Provide functionality for modifying text for any purpose.</strong></p>
            <p><strong>TextUtility can automatically checking spelling mistakes on text.</strong></p>
            <p><strong>TextUtility is provide some  functionality for converting text into Uppercase and lowercase.</strong></p>
            <p><strong>TextUtility is provide some  functionality for remove extra spaces and copy that text in to clipboard.</strong></p>
            <p><strong>We can use TextUtility in Dark mode and with other background colors also.</strong></p>
        </div>
    )
}







