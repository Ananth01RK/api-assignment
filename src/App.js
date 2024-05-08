import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import DataCard from './DataCard';
import Modal from './Modal';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLearnMore = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="container">
      {data.map((item) => (
        <DataCard key={item.id} item={item} onLearnMore={handleLearnMore} />
      ))}
      {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default App;
