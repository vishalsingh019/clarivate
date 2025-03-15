
import './../styles/sidemenu.css';
import dashboardLogo from './../assets/dashboard.svg';
import demoLogo from './../assets/demo.svg'
import { BrowserRouter as Router,Link } from "react-router-dom";



const SideMenu = () => {
    return (
       <div className='sidemenu-wrapper'> 
         <nav>
       <div className='icon-wrapper'>
            <Link to="/">
            <img src={dashboardLogo}  alt="dashboard logo" width={30}/>
            </Link>
      
       </div>
       <div className='icon-wrapper'>
       <Link to="/demo-app">
       <img src={demoLogo}  alt="dashboard logo" width={30}/>
       </Link>
       </div>
       </nav> 
     
       
       </div>
    );

};

export default SideMenu