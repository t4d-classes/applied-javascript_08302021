import { useState, useCallback } from 'react';


export const useApi = (baseResourceUrl) => {

  const [ items, setItems ] = useState([]);


  const refresh = useCallback(async () => {

    const res = await fetch(baseResourceUrl);
    const items = await res.json();

    setItems(items.map(item => ({
      ...item,
      id: item._id,
    })));

  }, [setItems, baseResourceUrl]);

  const append = useCallback(async (item) => {

    await fetch(baseResourceUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });

    await refresh();

  }, [refresh, baseResourceUrl]);

  const replace = useCallback(async (item) => {

    const itemToSave = {
      ...item,
      _id: item.id,
    };

    delete itemToSave.id;

    await fetch(baseResourceUrl + "/" + encodeURIComponent(itemToSave._id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemToSave),
    });

    await refresh();

  }, [refresh, baseResourceUrl]);;

  const remove = useCallback(async (itemId) => {

    await fetch(baseResourceUrl + "/" + encodeURIComponent(itemId), {
      method: 'DELETE',
    });

    await refresh();
  }, [refresh, baseResourceUrl]);;

  return [ items, refresh, append, replace, remove ];

};