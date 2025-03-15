
import './../styles/list.css'

const ItemCard = ({itemDetails, toggleFavorite, isFavorite, noButtons}: any) => {


    return (
       <>
        <div className="box-wrapper">
            <div className="img-wrapper">
                <img className='thumb-img' src={itemDetails.thumbnail} alt=""  width="250" height="250" />
            </div>
        <div className="ids">
            <label>Price: &#8377; {itemDetails.price}</label>
            <label>ID: {itemDetails.id}</label>
        </div>
        <div className="title">{itemDetails.title}</div>
        <div className="button-wrapper" >
            { !noButtons &&  <button className={`button ${isFavorite ? "remove-btn" : "add-btn"}`} onClick={() => toggleFavorite(itemDetails)}>
            {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
          </button>

            }
       
        </div>
        </div>
       </>

    );

}

export default ItemCard