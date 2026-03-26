export enum Screen {
  HOME = 'home',
  RECHARGE_DETAILS = 'recharge_details',
  PAYMENT = 'payment',
  SUCCESS = 'success',
  HISTORY = 'history',
  OFFERS = 'offers',
  ACCOUNT = 'account',
}

export interface Operator {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  color: string;
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  color: string;
}

export interface Pack {
  id: string;
  name: string;
  description: string;
  price: number;
  validity: string;
  tag?: string;
  type: 'data' | 'voice';
}
