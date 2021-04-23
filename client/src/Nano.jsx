import React, { useEffect, useState } from "react";
import axios from "axios";

function Nano(props) {
  const [price, setPrice] = useState(null);
  const [btcPrice, setBtcPrice] = useState(null);

  useEffect(() => {
    axios.get("https://proxy.nanos.cc/proxy/?action=price").then((res) => {
      setPrice(res.data.quotes.USD.price);
    });
  }, []);
  console.log(btcPrice);
  return (
    <div>
      <p>Nano Price {price}</p>
    </div>
  );
}

export default Nano;
