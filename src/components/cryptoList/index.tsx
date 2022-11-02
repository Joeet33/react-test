import { CryptoCard } from "../cryptoCard";

export interface CoinTypes {
  name: string;
  image: string;
  current_price: number;
}

interface CoinArray {
  coins: CoinTypes[];
}

export const CryptoList = ({ coins }: CoinArray) => {
  return (
    <div>
      {coins.map((coin, i) => {
        return (
          <CryptoCard
            key={i}
            name={coin.name}
            image={coin.image}
            current_price={coin.current_price}
          />
        );
      })}
    </div>
  );
};
