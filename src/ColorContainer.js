import React from 'react';

const ColorContainer = ({value}) => {
    return( 
    <div 
     style= 
        {{
            width: "3px",
            height: "3px",
            border: "1px solid black",
            backgroundColor:`${value}`
        }}
        >           
    </div>
     )
     
}

export default ColorContainer;