import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {

  return (
    <div className="App">
    <Header
      titulo="Clima App"
    />
    <Body/>
    <Footer
      links="Climapp"
    />
    </div>
  );
}

export default App;
