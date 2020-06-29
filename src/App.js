import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);
  useEffect(() => {
    const getData = async () => {
      if (search === '') return;
      const IMAGE_PAGES = 20;
      const API_KEY = '17255391-a1f617e06288dbd2e0246b437';
      const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&per_page=${IMAGE_PAGES}&page=${currentPage}`;
      const response = await fetch(URL).then((response) => response.json());
      setImages(response.hits);
      setPages(Math.ceil(response.totalHits / IMAGE_PAGES));
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' });
    };
    getData();
  }, [search, currentPage]);
  const previousPage = () => {
    const newCurrentPage = currentPage - 1;
    if (newCurrentPage === 0) return;
    setCurrentPage(newCurrentPage);
  };
  const nextPage = () => {
    const newCurrentPage = currentPage + 1;
    if (newCurrentPage > pages) return;
    setCurrentPage(newCurrentPage);
  };
  return (
    <>
      <div className='container'>
        <div className='jumbotron'>
          <p className='lead text-center'>ReactImages</p>
          <Form setSearch={setSearch} />
        </div>
        <div className='row justify-content-center'>
          <List images={images} />

          {currentPage === 1 ? null : (
            <button
              type='button'
              className='btn btn-info mr-1'
              onClick={previousPage}>
              &laquo;
            </button>
          )}
          {currentPage === pages ? null : (
            <button type='button' className='btn btn-info ' onClick={nextPage}>
              &raquo;
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
