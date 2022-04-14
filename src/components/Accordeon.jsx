import React from "react";
import Arrow from "../images/icon-arrow-down.svg"

function Accordeon(props) {
    const [isExpanded, setExpand] = React.useState(false)
    const [isHovered, setHover] = React.useState(false)

    function handleClick(id) {
        setExpand(!isExpanded)
    }
    function handleTitle() {
        setHover(!isHovered)
    }
    
    return (
        <div className="row px-3 py-4 accordeon"  
            onClick={() => {
                handleClick(props.id)
            }}  
            onMouseEnter={handleTitle} 
            onMouseLeave={handleTitle}>
            <div className="col col-12">
                <div 
                    className="d-flex justify-content-between"
                    style={{marginBottom: isExpanded && "0.75rem", fontWeight: isExpanded && 700}}>
                    <span 
                        className="title"
                        style={{color: isHovered && (!isExpanded && "hsl(14, 88%, 65%)")}}
                        > 
                        {props.title} 
                    </span>
                    <img className="arrow" src={Arrow} />
                </div>
            </div>
            <div>
                {isExpanded && props.content}
            </div>
        </div>
    )
}

export default Accordeon