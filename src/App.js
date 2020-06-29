import React, { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getData = async () => {
      if (search === '') return;
      const IMAGE_PAGES = 20;
      const API_KEY = '17255391-a1f617e06288dbd2e0246b437';
      const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&per_page=${IMAGE_PAGES}`;
      const response = await fetch(URL).then((response) => response.json());
      setImages(response.hits);
    };
    getData();
  }, [search]);
  return (
    <>
      <div className='container'>
        <div className='jumbotron'>
          <p className='lead text-center'>ReactImages</p>
          <Form setSearch={setSearch} />
        </div>
      </div>
    </>
  );
}

export default App;
