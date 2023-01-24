import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { CardContainer } from '../components/card-container/CardContainer';
import { MainCard } from '../components/card-main/CardMain';

function App() {
  const element = () => (
    <>
      <MainCard />
      <CardContainer />
    </>
  );
  return (
    <Routes>
      <Route path="/home" element={element()} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
