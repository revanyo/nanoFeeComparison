import React, { useEffect, useState } from "react";
import axios from "axios";

function Nano(props) {
  const [price, setPrice] = useState(null);
  const [reps, setReps] = useState(null);

  useEffect(() => {
    axios.get("https://proxy.nanos.cc/proxy/?action=price").then((res) => {
      setPrice(res.data.quotes.USD.price);
    });
    axios
      .get("https://proxy.nanos.cc/proxy/?action=representatives_online")
      .then((res) => {
        setReps(res.data.representatives.length);
      });
  }, []);

  return (
    <div>
      <p>Nano Price {price}</p>
      <p>Nano Reps {reps}</p>
    </div>
  );
}

export default Nano;
