import './App.css';

import { Navbar } from "./components/Navbar/Navbar";
import { Overview } from "./components/Overview/Overview";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Search,
  Notification,
} from "./assets/images/icons/icons.js";
import "./assets/styles/styles.css";
import Logo from "./assets/images/logo.png";
import Man from "./assets/images/photo.png";
import { Tasks } from './components/Tasks/Tasks';
import { Todays } from './components/Todays/Todays';


function App() {
  return (

    <div className="app">
      {/* <div className="container"> */}



      <div className="d-flex">
      <nav className="nav">
        <div className="logo_box">
          <a href="#" className="logo">
            <img className="logo_img" src={Logo} alt="logo image here" />
            Dashboard Kit
          </a>
        </div>
        <ul className="nav_list list-unstyled">
          <div className="nav_list_one">
            <div className="active">
              <Navbar icon={<Icon1 />} text="Overview" />
            </div>
            <Navbar icon={<Icon2 />} text="Tickets" />
            <Navbar icon={<Icon3 />} text="Ideas" />
            <Navbar icon={<Icon4 />} text="Contacts" />
            <Navbar icon={<Icon5 />} text="Agents" />
            <Navbar icon={<Icon6 />} text="Articles" />
          </div>
          <div className="nav_list_two">
            <Navbar icon={<Icon7 />} text="Settings" />
            <Navbar icon={<Icon8 />} text="Subscription" />
          </div>
        </ul>
      </nav>
      <div className="main_page">
        <header>
          <div className="header_inner d-flex justify-content-between align-items-center">
            <div>
              <h3 className="header_text">Overview</h3>
            </div>
            <div className="d-flex align-items-center">
              <div className="icons_box d-flex align-items-center">
                <div className="me-3">
                  <Search />
                </div>
                <div>
                  <Notification />
                </div>
              </div>
              <div className="header_person d-flex align-items-center">
                <p className="person_title mt-3">Jones Ferdinand</p>
                <img className="" src={Man} alt="" />
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="overview_box">
            <ul className="overview_list list-unstyled">
              <Overview title="Unresolved" number={60} />
              <Overview title="Overdue" number={16} />
              <Overview title="Open" number={43} />
              <Overview title="On hold" number={64} />
            </ul>
          </div>
        <Todays/>
        <Tasks/>

        </main>
      </div>
    </div>


      {/* </div> */}
    </div>
  );
}

export default App;
