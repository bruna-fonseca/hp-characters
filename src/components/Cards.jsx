import React from 'react';
import '../style/card.css';

export default function Cards({ character }) {
  return (
    <div className="card-item" >
      <h2>{character.name}</h2>
    </div>
  );
};
