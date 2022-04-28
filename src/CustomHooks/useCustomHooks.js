import { useEffect, useState } from "react";

const useChefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    const url = 'http://localhost:5000/users';
    fetch(url)
      .then(res => res.json())
      .then(data => setChefs(data));
  }, []);
  return [chefs, setChefs];
}

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);
  return [orders, setOrders];
}

export { useChefs, useOrders };