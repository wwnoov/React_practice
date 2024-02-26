import React from 'react';
import ValidationSample from './ValidationSample';
import MoveBox from './MoveBox';

const App = () => {
  return (
    <div>
      <ValidationSample />
      <MoveBox ref={(ref) => {this.moveBox = ref}} />
      <button onClick={() => {this.moveBox.move(200,200)}}>move2</button>
    </div>
  );
};

export default App;