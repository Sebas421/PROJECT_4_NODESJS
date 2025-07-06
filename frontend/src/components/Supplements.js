import React, { useState } from 'react';

export default function Supplements() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h2
        onClick={() => setVisible(!visible)}
        style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
      >
        Supplements
      </h2>
      {visible && (
        <ul>
          <li>Creatine</li>
          <li>Whey Protein</li>
          <li>Multivitamins</li>
        </ul>
      )}
    </div>
  );
}