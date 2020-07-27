import React from "react";

function Wrapper({children})
{
    return(
        <div className="container" style={{marginTop:20, minWidth: "500px"}}>
            {children}
        </div>
    )
};

export default Wrapper;