import React from 'react';
import { useState } from 'react';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likeUp, setLikeUp] = useState(likes);
  const [likeDown, setLikeDown] = useState(dislikes);
  const handleClickUp = () => {
    setLikeUp(likeUp + 1);
  };
  const handleClickDown = () => {
    setLikeDown(likeDown + 1);
  };
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
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
  );
};
