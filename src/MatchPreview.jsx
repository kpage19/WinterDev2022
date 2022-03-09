import  "../src/MatchPreview.css";
import React, { Component } from 'react';
function ProfilePreview({sequence, name, classes, bio}){
    /*Sequence means which box in the row of boxes it is so like the
    leftmost box is first, the middle one is second, and the rightmost 
    one is third*/
    return(
        <div className={`Profilepreview ${sequence}`} >
            
            <h3 id="name">{name}</h3>
            <h3 id="classes">{classes}</h3>
            <h4 id="bio">{bio}</h4>
        </div>

    );

}
export default ProfilePreview