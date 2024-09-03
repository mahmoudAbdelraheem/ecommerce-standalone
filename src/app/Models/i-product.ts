export enum productDiscount {
    NoDiscount = 'NoDiscount',
    secondeDiscount = '10%',
    thiredDiscount = '15%',
}
export interface IProduct {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  rate: number;
  category_id: number;
}
