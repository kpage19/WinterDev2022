import '../src/Profilepage.css';
import APP from "./App";
import React from 'react';
import MatchPreview from './MatchPreview';


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

          <MatchPreview sequence="first" name="Victoria Hirsanthopoulis" bio="Hey guys 
          this is a really long bio to make sure everything fits correctly in these boxes lololol
          anyways what's up I'm a something year major" />
          <MatchPreview sequence="second" name="Mia Page" bio="" />
          <MatchPreview sequence="third" name="Mia Page" bio="" />
        </div>
    
    
      );
}

export default Profilepage;