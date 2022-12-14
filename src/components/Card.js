import React from "react";

const Card =  ({id, name, email}) => {
    return(
        <div className="tc bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5">
            <img width="200" height="200" alt='robots' src={`https://robohash.org/${id}?size=400x400`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;