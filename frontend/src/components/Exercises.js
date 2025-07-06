import React, { useState } from 'react';

export default function Exercises() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h2
        onClick={() => setVisible(!visible)}
        style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
      >
        Exercises
      </h2>
      {visible && (
        <ul>
          <li>Push-ups</li>
          <li>Squats</li>
          <li>Planks</li>
        </ul>
      )}
    </div>
  );
}