import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Joke } from './Joke';
import { jokes } from './jokes.js';

const App = () => {
  return (
    <div className="container">
      {jokes.map((jokes) => {
        return (
          <Joke
            userAvatar={jokes.avatar}
            userName={jokes.name}
            text={jokes.text}
            likes={jokes.likes}
            dislikes={jokes.dislikes}
            key={jokes.id}
          />
        );
      })}
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
