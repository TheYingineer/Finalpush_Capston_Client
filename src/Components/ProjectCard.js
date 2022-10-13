import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
    const { indvProjectProps } = props;

    const [isClicked, setIsClicked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
        setIsLiked(!isLiked);
        console.log("click");
    };

    useEffect(() => {
        console.log(indvProjectProps)
    }, [indvProjectProps])

    return (
        <div>
            <Link to={`/ProjectDetail/${indvProjectProps.id}`}>

            <h4>{indvProjectProps.product_name}</h4>
            
            </Link>

            <h4>{indvProjectProps.price}</h4>
            <img className = "ProjectCardImage"
                src={indvProjectProps.pic}
                alt={indvProjectProps.product_name}
                onClick={handleClick}
            />
            <br></br>
            <button onClick={() => { setIsLiked(!isLiked) }}>like</button>

            {isLiked ? (
                <div>
                    <p> Thanks for liking! </p>
                </div>
            ) : null}

            {isClicked ? (
                <div>
                    {/* <p> abv: {indvProjectProps.abv} | ibu: {indvProjectProps.ibu}</p> */}
                    <p>{indvProjectProps.metal_thickness}</p>
                </div>
            ) : null}
            {/* Line 7-line 27 creates a conditional rendering, for which when the user clicks on the icon, 
      it will display the API info and click it again, will make it disappear */}
        </div>
    );
}
