import React from 'react';

import './App.scss';

import Main from './pages/Main'

class App extends React.Component {

  render() {
    return (
      <div className='mainbody'>
        <Main />
      </div>
    );
  }
}

export default App;
