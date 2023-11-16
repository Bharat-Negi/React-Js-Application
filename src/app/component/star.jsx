import React from "react";

const Star = ({stars}) => {
    const ratingstar = Array.from({length: 5}, (elem, index) => {
        let number = index + 0.5
        return <i key={index}>
            {
                stars >= index + 1 ? (<i className="text-warning fa fa-star"></i>) 
                : stars >= number ? (<i className="text-warning fa fa-star"></i>) 
                : (<i className="text-muted fa fa-star"></i>)
            }
        </i>
    });
    return <>
        {ratingstar}
    </>
}

export default Star;