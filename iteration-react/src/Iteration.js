import React from 'react';

const Iteration = () => {
  const names = ['javascript','jQuery','React'];
  const namesList = names.map((name,index) => <li key={index}>{name}</li>);
  //['<li>javascript</li>','<li>jQuery</li>','<li>React</li>']
  return (
    <div>
      <ul>
        {namesList}
      </ul>
    </div>
  );
};

export default Iteration;