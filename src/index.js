import React, { useState, useEffect, useCallback } from 'react';

const useMidEnd = (initialEntries) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState({});
  const [error, setError] = useState({});

  const fetchData = useCallback(async (entry) => {
    const { key, fetchData, expiryTimeInSeconds } = entry;
    setLoading(prev => ({ ...prev, [key]: true }));
    setError(prev => ({ ...prev, [key]: null }));

    try {
      // Attempt to use cached data
      const cached = localStorage.getItem(key);
      if (cached) {
        const { value, expiry } = JSON.parse(cached);
        if (expiry > Date.now()) {
          setData(prev => ({ ...prev, [key]: value }));
          setLoading(prev => ({ ...prev, [key]: false }));
          return;
        }
      }

      // Fetch data and update cache
      const result = await fetchData();
      setData(prev => ({ ...prev, [key]: result }));
      localStorage.setItem(key, JSON.stringify({ value: result, expiry: Date.now() + expiryTimeInSeconds * 1000 }));
    } catch (e) {
      setError(prev => ({ ...prev, [key]: e }));
    } finally {
      setLoading(prev => ({ ...prev, [key]: false }));
    }
  }, []);

  // Initial fetch for each entry
  useEffect(() => {
    initialEntries.forEach(fetchData);
  }, [initialEntries, fetchData]);

  // Dynamically add a new entry
  const addEntry = useCallback((newEntry) => {
    fetchData(newEntry);
  }, [fetchData]);

  // Force refresh an entry's data
  const refreshEntry = useCallback((key) => {
    const entry = initialEntries.find(e => e.key === key);
    if (entry) {
      fetchData({ ...entry, expiryTimeInSeconds: 0 });
    }
  }, [initialEntries, fetchData]);

  return { data, loading, error, addEntry, refreshEntry };
};
