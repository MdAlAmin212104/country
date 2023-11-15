import React from 'react';

const Country = (props) => {
    const {name, flags, population, region} =props.country;
    
    const styleSheet = {
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        width: '300px',
        float: "left",
        height: '300px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const handleAddCountry = props.handleAddCountry;

    
    return (
        <div style={styleSheet}>
            <h1>this is {name.common}</h1>
            <img src={flags.png} alt="" style={{height: '50px'}}/>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button onClick={() => handleAddCountry(props.country)}>country addedd</button>
        </div>
        
    );
};

export default Country