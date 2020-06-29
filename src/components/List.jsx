import React from 'react';
import Image from './Image';
const List = ({ images }) => {
  return (
    <>
      <div className='col-12 p-5 row'>
        {images.map((image) => (
          <Image key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};

export default List;
