import React from "react";

/**
 * Renders information about the user obtained from MS Graph
 * @param props
 */
export const ProfileData = (props) => {
    console.log("DEBUG - ProfileData.jsx: graphData: ", props.graphData);

    return (
        <div id="profile-div">
            <p><strong>First Name: </strong> {props.graphData.givenName}</p>
            <p><strong>Last Name: </strong> {props.graphData.surname}</p>
            <p><strong>Email: </strong> {props.graphData.userPrincipalName}</p>
            <p><strong>Id: </strong> {props.graphData.id}</p>
            <p><strong>Aud: </strong> {props.graphData.aud}</p>
        </div>
    );
};
