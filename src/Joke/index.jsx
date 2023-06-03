import React from 'react';
import { useState } from 'react';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likeUp, setLikeUp] = useState(0);
  const [likeDown, setLikeDown] = useState(0);
  const handleClickUp = () => {
    setLikeUp(likeUp + 1);
  };
  const handleClickDown = () => {
    setLikeDown(likeDown + 1);
  };
  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
            />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={handleClickUp}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likeUp}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={handleClickDown}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {likeDown}
          </span>
        </div>
      </div>
    </div>
  );
};