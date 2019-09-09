import React from "react";

const Location = (props) => {

    // Destructuring
    // Desensamblar props para obtener la información.
    const { city } = props;

    return (
        <div>
            <h1>{city}</h1>
        </div>
    );
};

export default Location;
