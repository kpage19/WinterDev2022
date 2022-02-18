import '../src/Profilepage.css';
import App from "./App";

function Profilepage() {

    return (
        <div className="Profilepage">
          <iframe id="topbar"></iframe>
          <h1 id="StudyBuddies">Study Buddies</h1>
          {/*<button id="logout">Logout</button>*/} 
          <button id="edit">Edit</button>
          <line id="divide"></line>
          <h1 id="topMatches">Top Matches:</h1>
          <button id="seeAll">See all</button>
        </div>
    
    
      );
}

export default Profilepage;