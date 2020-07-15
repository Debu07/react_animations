import {Spring} from 'react-spring/renderprops'
import React from 'react'

export default function Comp1() {
    return (
        <Spring 
            from={{opacity:0 , marginTop:-500}}
            to={{opacity:1, marginTop:0}}>
                {props=>(
                    <div style={props}>
                        <div style={c1Style}>
                            <h1>Component 1</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis semper augue, vel tempus dui. Vestibulum in sem nisi. Aenean quis volutpat est. Nunc ac volutpat nisi, nec faucibus nisi. Suspendisse tempor velit id venenatis varius. Sed lacinia urna eget orci imperdiet, sit amet vulputate ligula aliquet.

                            </p>
                            <Spring
                            from={{number:0}}
                            to={{number:10}}
                            config={{duration:10000}}>
                                { props =>(
                                    <div style={props}>
                                        <h1 style={counter}>
                                            {props.number.toFixed()}
                                        </h1>
                                    </div>
                                )}

                            </Spring>

                        </div>
                    </div>
                    )}
            </Spring>   
    )
}

const c1Style={
    background:'steelblue',
    padding:'2rem',
    color:'white',
}

const counter={
    background:'#333',
    textAlign:'center',
    width:'100px',
    borderRadius:'50%',
    margin:'1rem auto'
}


