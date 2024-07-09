import React, { useState, useCallback } from "react";

const ItemList = () => {
  const [items, setItems] = useState(["1", "2", "3"]);
  const removeItem = useCallback((itemToBeRemoved) => {
    setItems(previousItems => previousItems.filter((item) => item !== itemToBeRemoved));
  }, []);
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => removeItem(item)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
