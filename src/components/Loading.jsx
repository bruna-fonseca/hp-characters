import React from 'react';

const HEADING_STYLES = {
  fontSize: "30px",
};

export default function Loading() {
  return (
    <div>
      <h1 style={ HEADING_STYLES }>Carregando...</h1>
    </div>
  );
};
