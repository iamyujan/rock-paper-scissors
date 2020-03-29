import React from 'react';
import './App.scss';
import '../../tailwind.src.scss';
import Header from '../Header'
import Steps from '../Steps'

function App() {
  return (
    <div className="App container mx-auto h-full flex flex-col justify-between lg:py-16">
      <Header></Header>
      <main className="AppBody">
        <Steps></Steps>
      </main>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.yujan.com.np/">Yujan Prajapati</a>.
      </div>
    </div>
  ) 
}

export default App;
