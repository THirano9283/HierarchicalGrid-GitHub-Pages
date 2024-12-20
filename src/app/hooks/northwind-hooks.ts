import { useCallback, useEffect, useState } from 'react';
import { getOrders } from '../services/northwind';
import { OrdersType } from '../models/Northwind/orders-type';

export const useGetOrders = () => {
  const [orders, setOrders] = useState<OrdersType[]>([]);

  const requestOrders = useCallback(() => {
    let ignore = false;
    getOrders()
      .then((data) => {
        if (!ignore) {
          setOrders(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestOrders();
  }, [requestOrders]);

  return { requestNorthwindOrders: requestOrders, northwindOrders: orders, setNorthwindOrders: setOrders };
}
