import React, { useState } from 'react';

const database_name = 'local'

export default function useMidEnd(key, initialValue, table) {
  const store_name = table? table: 'data'
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // if db not exist, create it
      // if object store not exist, create it
      // if key-value not exist, add it
      // if already exist, update it
      var req = indexedDB.open(database_name)
      req.onupgradeneeded = function (event) {
        var database = event.target.result;
        var objectStore = database.createObjectStore(store_name)
      }
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  })



  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  // get value
  const getValue = (table, key) => {

    // if table is undefined, return list of table
    return 'value'
  }

  // request to back end
  const request = (url, api_method, data ) => {

    return 'value'
  }

  return [storedValue, setValue, getValue, request];
}