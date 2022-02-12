/* eslint-disable jsx-a11y/heading-has-content */
import React from "react"

export default function Home(props){
    return(
        <div className="home">
            <img src={`../images/${props.item.imageUrl}`} alt="" width="200px" className="home-img" />
            <div className="details">
                <div className="location">
                    <img src="../images/location.png" alt="t"  />
                    <h3>{props.item.location}</h3>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.item.title}</h2>
                <h5>{`${props.item.startDate}-${props.item.endDate}`}</h5>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}