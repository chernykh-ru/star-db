import React, { useState } from 'react';
import './ErrorButton.css';

const ErrorButton = () => {
  const [state, setState] = useState({
    renderError: false,
  });

  if (state.renderError) {
    this.foo.bar = 0;
  }

  return (
    <button
      className='error-button btn btn-danger btn-lg'
      onClick={() => setState({ renderError: true })}>
      Throw Error
    </button>
  );
};

export default ErrorButton;
