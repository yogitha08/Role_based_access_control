import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch ('http://localhost:5000/api/auth/login');
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
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
