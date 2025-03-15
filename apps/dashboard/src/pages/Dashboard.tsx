import NavigationButton from '../components/button'
import './../styles/list.css';
import ItemCard from "../components/card";

const Dashboard = ({favorites}: {favorites?: any[]}) => {
  console.log(favorites)

    return (
       <>
         <NavigationButton route="/list" text="Go to List"/>
         {favorites.length> 0?<div className="list-wrapper">
            {favorites && favorites.map((items) =>(<ItemCard key={items.id} itemDetails={items} noButtons={true}/>))} 
         </div>:<div className='no-text'>No Favorite Data</div>
         }
       </>

    );

}

export default Dashboard