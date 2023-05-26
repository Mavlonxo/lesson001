import React from 'react';
import './App.css';
import Iphone from './components/iphone14/Iphone';
import Iphone14 from './components/iphone14pro/Iphone14';
import Navbar from './components/navbar/Navbar';
import Wrapper from './components/wrapper/Wrapper';
import Item from './item/Item';
import Footer from './components/footer/Footer';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Iphone />
      <Iphone14/>
      <Wrapper />
      <Item />
      <Footer />
      

    </div>
  );
}

export default App;
