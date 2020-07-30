import React from 'react';

const Image = ({ href, width = '75%', altText = 'image' }) => {
  const styles = {
    image: {
      width: width,
      height: 'auto',
      'border-radius': '10px',
      'box-shadow': '0 0 10px 4px #888'
    },
    imageContainer: {
      'text-align': 'center',
      'padding-bottom': '2rem'
    },
  };

  return (
    <div style={styles.imageContainer}>
      <img style={styles.image} src={href} alt={altText}></img>
    </div>
  );
};

export default Image;
