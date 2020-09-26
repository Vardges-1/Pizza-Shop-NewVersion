import React, {useState} from 'react';

function Categorys({items, onClickItem}){

   const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
              <li className={activeItem === null ? "active" : ""} onClick={() => onSelectItem(null)}>All</li>
              {items.map((item, index) => {
                  return(
                     <li onClick={() => onSelectItem(index)}
                      className={activeItem === index ? 'active' : ""}
                      key={`${item}_${index}`}>{item}</li>
                  )
              })}
            </ul>
          </div>
    );
}

export default Categorys;
