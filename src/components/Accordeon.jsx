import React from "react";
import Arrow from "../images/icon-arrow-down.svg"

function Accordeon(props) {
    const [isExpanded, setExpand] = React.useState(false)
    //const [isClicked, setClick] = React.useState([0, 1, 2, 3, 4])

    function handleClick(id) {
        setExpand(!isExpanded)
        /* setClick((prevClicked) => {
            console.log([...prevClicked]);
            return [id]
        }) */
    }
    
    return (
        <div className="row px-3 py-4 accordeon">
            <div className="col col-12">
                <div 
                    onClick={() => {
                        handleClick(props.id)
                    }} 
                    className="d-flex justify-content-between"
                    style={{marginBottom: isExpanded ? "0.75rem" : null}}>
                    <span className="title"> {props.title} </span>
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