import React from 'react';
import Button from './Button';
import WelcomeFunction from './WelcomeFunction';
import WelcomeClass from './WelcomeClass';
import Border from './Border';

import './App.css';

const App = () => {
  const onButtonClick = () => {
    alert('You clicked the button!');
  };

  return (
    <>
      <div className="App">
        <Border>
          <WelcomeFunction name="Doron" age={34} />
          <WelcomeFunction age={34} />
          <WelcomeClass name="Doron" />
          <Button text="I a Button" onClick={onButtonClick} />
        </Border>
      </div>
      <div className="some-other-div"></div>
    </>
  );
};

export default App;
