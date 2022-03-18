import React, { useEffect, useState } from 'react';
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, collection, getDocs, set } from "firebase/firestore";

function Profile({ isAuth }) {
  
  let nagivate = useNavigate();
  const userColRef = collection(db, "users");
  const [classes, setClasses] = useState("");
  const [bio, setBio] = useState("");
  const [hasProfile, setHasProfile] = useState(true);
  const [edit, setEdit] = useState(false);

  // If user not authenticated, redirect to login page
  useEffect(() => {
    if (!isAuth) {
      nagivate("/");
    }
  }, []);

  // Retrieve profile info when page loads
  useEffect(() => {
    getDocs(userColRef)
    .then((snapshot) => {
      let hasProfileTemp = false; 
      snapshot.docs.forEach((doc) => {
        if (doc.id == auth.currentUser.uid) {
          document.getElementById("displayClasses").innerHTML = doc.data().classes;
          document.getElementById("displayBio").innerHTML = doc.data().bio;
          hasProfileTemp = true;
        }
      });
      if (!hasProfileTemp) { setHasProfile(false); }
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  // Update profile
  const updateProfile = async () => {
    // Add/update to Cloud Firestore
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      classes: document.getElementById("classesInput").value,
      bio: document.getElementById("bioInput").value,
      name: auth.currentUser.displayName
    });

    // Retrieve profile info when updated
    getDocs(userColRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.id == auth.currentUser.uid) {
          document.getElementById("displayClasses").innerHTML = doc.data().classes;
          document.getElementById("displayBio").innerHTML = doc.data().bio;
        }
      });
    })
    .catch(err => {
      console.log(err);
    }); 
    // Hide 'Edit Profile' section
    setHasProfile(true);
    setEdit(false);
  };

  // UI
  return (
    <div className="profilePage">      
      <div className="displayInfo">
        <h1>My Profile</h1>
        <div>
          <b>My Classes</b>
          {hasProfile ? (
            <div id="displayClasses"></div>
          ) : (
            <div><i>Add your classes here!</i></div>
          )}
        </div>
        <br/>
        <div>
          <b>About Me</b>
          {hasProfile ? (
            <div id="displayBio"></div>
          ) : (
            <div><i>Add your bio here!</i></div>
          )}
        </div>
        <br/>
      </div>
      
      <button onClick={() => setEdit(true)}>Edit Profile</button>
      
      {/* Show 'Edit Profile' section if user clicked button */}
      {edit && 
        <div className="editInfo">
          <br/>
          <div className="InputGroup">
            <label>Classes: </label>
            <br/>
            <input
              placeholder="CSE 12"
              id="classesInput"
            />
          </div>
          
          <div className="InputGroup">
            <label>About Me:</label>
            <br/>
            <textarea
              placeholder="About me..."
              id="bioInput"
            />
          </div>
          <button onClick={updateProfile}>Save</button>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </div>
      }
    </div>
  )
}

export default Profile;