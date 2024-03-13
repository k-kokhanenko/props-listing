import etsy from '../../etsy.json';
import { useState } from 'react';

export const Items = ({render}) => {
    const [items, setItems] = useState(etsy);

    //console.log(items[0].MainImage.url_570xN);
    //console.log(items);

    return (
        <>{render(items)}</>        
    )
}
