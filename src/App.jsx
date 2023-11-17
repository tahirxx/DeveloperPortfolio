import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Card from './components/Card.jsx'; // Make sure to import the Card component
import data from './data.jsx';

function App() {
  const cards = data.map(item => (
    <Card
      key={item.id}  // Don't forget to add a unique key when rendering a list of components
      img={item.coverImg}
      stack={item.stack}
      title={item.title}
      date={item.date}
      description={item.description}
      github={item.github}
    />
  ));

  return (
    <div>
      <Nav />
      {cards}
    </div>
  );
}

export default App;

