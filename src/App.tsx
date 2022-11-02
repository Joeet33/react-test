import React, { useEffect, useState } from 'react';

function App() {

  const [coins, setCoins] = useState()

  useEffect(() => {
    const fetchData = async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    const data = await res.json()
    setCoins(data)
    }
    fetchData()
  },[])
  
  return (
    <div>
    </div>
  );
}

export default App;
