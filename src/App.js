import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import planets from './data/planets';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
      </>
    );
  }
}
// iniciando projeto

export default App;
