import { useState } from 'react';

export const useList = (initialList) => {

  const [ items, setItems ] = useState(initialList);

  const appendItem = (item) => {
    setItems([
      ...items,
      {
        ...item, id: Math.max(...items.map(c => c.id), 0) + 1,
      }
    ]);
  };

  const replaceItem = (item) => {
    const newItems = [...items];
    const itemIndex = items.findIndex(c => c.id === item.id);
    newItems[itemIndex] = {
      ...newItems[itemIndex],
      ...item
    };
    setItems(newItems);
  };

  const removeItem = (itemId) => {
    setItems(items.filter(c => c.id !== itemId));
  };

  return [ items, appendItem, replaceItem, removeItem ];

};
