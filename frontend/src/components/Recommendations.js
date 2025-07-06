import React, { useState } from 'react';

export default function Recommendations() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h2
        onClick={() => setVisible(!visible)}
        style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
      >
        Recommendations
      </h2>
      {visible && (
        <p>
          Stay consistent, hydrate well, and eat enough calories for your goals!
        </p>
      )}
    </div>
  );
}
