import { CoinTypes } from "../cryptoList";

export const CryptoCard = ({ image, name, current_price }: CoinTypes) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <h3>${current_price.toLocaleString()}</h3>
      </div>
    </div>
  );
};
