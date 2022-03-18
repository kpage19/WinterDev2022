import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase-config";
import { getDocs, collection, doc } from 'firebase/firestore';


function Home({ isAuth }) {
  
  let nagivate = useNavigate();
  const [usersList, setUsersList] = useState([]);
  const usersColRef = collection(db, "users");

  // If user not authenticated, redirect to login page
  useEffect(() => {
    if (!isAuth) {
      nagivate("/");
    }
  }, []);

  // Get all users
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersColRef)
        // .then((snapshot) => {
        //   snapshot.docs.forEach((doc) => {
        //     if (doc.id != auth.currentUser.uid) {
        //       setUsersList(usersList => [...usersList, ...doc.data()]);
        //     }
        //   });
        // })
        // .catch(err => {
        //   console.log(err);
        // }); 



      // getDocs(currentUserRef)
      // .then((snapshot) => {
      //   snapshot.docs.forEach((doc) => {
      //     if (doc.id == auth.currentUser.uid) {
      //       document.getElementById("displayClasses").innerHTML = doc.data().classes;
      //       document.getElementById("displayBio").innerHTML = doc.data().bio;
      //     }
      //   });
      // })
      // .catch(err => {
      //   console.log(err);
      // }); 
      
      setUsersList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsers();
  });

  // Display users
  return (
    <div className="homePage">
      <h1>My Matches</h1>
      <p>(just displays all of the users in no order right now)</p>
      {usersList.map((user) => {
        return (
          <div className="user">
            <h2>{user.name}</h2>
            <div>
              <b>Classes:</b>
              <div>{user.classes}</div>
            </div>
            <br/>
            <div>
              <b>About:</b>
              <div>{user.bio}</div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Home;