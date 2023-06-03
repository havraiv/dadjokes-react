import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { useState } from 'react';
import { Joke } from './Joke';

const App = () => {
  return <Joke />;
};

createRoot(document.querySelector('#app')).render(<App />);
