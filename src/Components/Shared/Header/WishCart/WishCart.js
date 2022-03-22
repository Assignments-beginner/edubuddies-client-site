import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../../hooks/useAuth";

const WishCart = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/userWishCart/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
    // .then((data) => console.log(data))
  }, [user.email]);

  return (
    <div>
      <h1 className="flex items-center justify-center text-3xl uppercase font-semibold mt-10 md:mb-9 mb-5 text-red-500">
        <span className="mr-2">Wish Cart</span>
        <FontAwesomeIcon
          className="text-red-500 text-2xl"
          icon={faCartShopping}
        />{" "}
        <span className="text-xl mb-6">{orders.length || 3}</span>
      </h1>
    </div>
  );
};

export default WishCart;
