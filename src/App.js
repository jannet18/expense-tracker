import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import './App.css';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import { AuthUserProvider } from './firebase/auth';
import Home from './components/Home';


function App() {
  
  return (
    <AuthUserProvider>
   <GlobalProvider>
    <Home/>
   <Header/>
   <div className='container'>
    <Balance/>
    <IncomeExpenses/>
    <TransactionList/>
    <AddTransaction/>

   </div>
   </GlobalProvider>
   </AuthUserProvider>
  );
}

export default App;
