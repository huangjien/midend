import React from 'react'
import ReactDOM from 'react-dom'
import useMidEnd from './index'

const Root = () => {
  const initialEntries = [
    {
      key: 'exampleData',
      fetchData: async () => {
        // Example of fetching data
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      },
      expiryTimeInSeconds: 3600, // 1 hour
    }
    // Add more entries as needed
  ];

  const { data, loading, error, addEntry, refreshEntry } = useMidEnd(initialEntries);

  // Example of dynamically adding an entry
  const handleAddEntry = () => {
    addEntry({
      key: 'newData',
      fetchData: async () => {
        const response = await fetch('https://api.newsource.com/data');
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      },
      expiryTimeInSeconds: 300,
    });
  };

  // Example of refreshing data for an entry
  const handleRefreshEntry = (key) => {
    refreshEntry(key);
  };

  return (
    <div>
      {Object.keys(data).map((key) => (
        <div key={key}>
          <h4>{key}</h4>
          {loading[key] && <p>Loading...</p>}
          {error[key] && <p>Error: {error[key].message}</p>}
          {data[key] && <div>{JSON.stringify(data[key], null, 2)}</div>}
        </div>
      ))}
      <button onClick={handleAddEntry}>Add New Entry</button>
      {/* Example button for refreshing 'exampleData' */}
      <button onClick={() => handleRefreshEntry('exampleData')}>Refresh Example Data</button>
    </div>
  );
}


ReactDOM.render(<Root />, document.getElementById('app'));
