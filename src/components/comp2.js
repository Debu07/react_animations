import {Spring} from 'react-spring/renderprops'
import React from 'react'

export default function Comp2() {
    return (
        <Spring 
            from={{opacity:0}}
            to={{opacity:1}}
            config={{ delay:1000, duration:1000}}>
                {props=>(
                    <div style={props}>
                        <div style={c2Style}>
                            <h1>Component 2</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis semper augue, vel tempus dui. Vestibulum in sem nisi. Aenean quis volutpat est. Nunc ac volutpat nisi, nec faucibus nisi. Suspendisse tempor velit id venenatis varius. Sed lacinia urna eget orci imperdiet, sit amet vulputate ligula aliquet.

                            </p>
                            <button 
                            style={btn} 
                            onClick={props.toggle}> 
                            Toggle component 3</button>

                        </div>
                    </div>
                    )}
            </Spring> 
    )
}

const c2Style={
    background:'slateblue',
    padding:'2rem',
    color:'white',
}
const btn={
    background:'#333',
    color:'#fff',
    padding:'1rem 2rem',
    border:'none',
    textTransform:'uppercase',
    margin:'15px 0',
    cursor:'pointer'
}

