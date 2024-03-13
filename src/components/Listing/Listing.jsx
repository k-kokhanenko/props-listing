import { Items} from '../Items/Items';
import classNames from 'classnames';

export const Listing = () => {    
  const modifyTitle = (item) => {
    return item.title && item.title.length > 15 ? item.title.slice(0, 50) + "…" : item.title;    
  }

  const getImageUrl = (item) => {
    return item.MainImage ? item.MainImage.url_570xN : '';
  }

  const modifyPrice = (item) => {
    if (item.currency_code == 'USD') {
      return `$${item.price}`;
    }
      
    if (item.currency_code == 'EUR') {
      return `€${item.price}`;
    }

    return `${item.price} ${item.currency_code}`;    
  }

  const getQuantityModify = (item) => {
    if (item.quantity > 20) {
      return 'level-high';
    }
      
    if (item.quantity <= 10) {
      return 'level-low';
    }

    return 'level-medium';
  }

  return (
      <Items render = { items => (
        <div className="item-list">
        { 
          items.map(item => 
            <>
              <div className="item" key={item.listing_id}>
                <div className="item-image">
                  <a href={item.url}>
                    <img src={getImageUrl(item)}/>
                  </a>
                </div>
                <div className="item-details">
                  <p className="item-title">{ modifyTitle(item) }</p>
                  <p className="item-price">{modifyPrice(item)}</p>
                  <p className={classNames(getQuantityModify(item), 'item-quantity')}>{item.quantity} left</p>
                </div>
              </div>
            </>
          ) 
        }
        </div>
      )}
      />
  );
}
