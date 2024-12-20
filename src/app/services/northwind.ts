import { OrdersType } from '../models/Northwind/orders-type';

export async function getOrders(): Promise<OrdersType[]> {
  const response = await fetch('../../static-data/northwind-orders-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
