import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null); // State to hold server response
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
         const response = await axios.post('http://localhost:5000/api/auth/login');
      // Example API
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error connecting to server:', error.message);
    }
     
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <div>Title: {data.title}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default App;
