// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [rates, setRates] = useState([]);
  const currencies = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"];

  useEffect(() => {
    fetch('API KEY')
      .then((response) => response.json())
      .then((data) => {
        const filteredRates = currencies.map((currency) => ({
          currency,
          exchangeRate: parseFloat(data.rates[currency]),
          weBuy: parseFloat(data.rates[currency]) * 1.05,
          weSell: parseFloat(data.rates[currency]) * 0.95,
        }));
        setRates(filteredRates);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h2>Currency Rates</h2>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate) => (
            <tr key={rate.currency}>
              <td>{rate.currency}</td>
              <td>{rate.weBuy.toFixed(4)}</td>
              <td>{rate.exchangeRate.toFixed(6)}</td>
              <td>{rate.weSell.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
