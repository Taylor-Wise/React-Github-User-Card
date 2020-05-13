import React from "react";


const Followers = (props) => {

    return( 
        <>
        <div className="followers-card"> 
            <h2><a href={props.followers.html_url}>{props.followers.login}</a> </h2>
        </div> 
        </>
    )
}



export default Followers;