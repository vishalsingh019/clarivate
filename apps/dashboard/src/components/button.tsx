import { useNavigate } from "react-router-dom";
import './../styles/dashboard.css'

const NavigationButton = ({route, text}: any) => {
    const navigate = useNavigate();

    return (
       <>
         <button className="nav-button button" onClick={() => navigate(route)}>{text}</button>
       </>

    );

}

export default NavigationButton