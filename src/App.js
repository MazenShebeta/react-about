import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';



function App() {
  return (
    <div className='container'>
      <ProfilePhoto />
      <div>
      <FullName />
      <Address />
      </div>
    </div>
  );
}

export default App;

