import React, { useEffect, useState } from "react";
import { CoinTypes, CryptoList } from "./components/cryptoList";
import { Pagination } from "./components/pagination";

function App() {
  const [coins, setCoins] = useState<CoinTypes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coins.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await res.json();
      setCoins(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Crypto Coins</h1>
      <CryptoList coins={currentPosts} />
      <Pagination
        totalPosts={coins.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
