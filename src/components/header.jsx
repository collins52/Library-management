import './header.css'
function Header() {
    return(
        <div id='headerContainer'>
          <div id='header'>
             <div id="adminInfo">
              <img src="./assets/selfie1.png" alt="Admin profile image"/>
              <div id='nameRole'>
                  <span id='name'>Nicky try</span>
                  <span id='role'>Admin</span>
              </div>
             </div>
             <div id='userCount'>
              <img src="./assets/Group.svg" alt="" />
              <span>25</span>
             </div>
          </div>
          <div id='search'>
            <img src="./assets/person_search.svg" id="person_search" alt="search icon" />
            <input type='text' placeholder='Search'></input>
          </div>
        </div>

    );
}

export default Header