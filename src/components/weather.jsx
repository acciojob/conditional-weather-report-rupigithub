import React from 'react';

function Weather({temp,cond}){
    const tempStyle = {color: temp>20 ? 'red' : 'blue'};
    return(
        <div>
            <h1 style={tempStyle}>{temp}</h1>
            <p>{cond}</p>
        </div>
    )
}

export default Weather;