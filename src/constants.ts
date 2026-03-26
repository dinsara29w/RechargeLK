import { Operator, Offer, Pack } from './types';

export const OPERATORS: Operator[] = [
  {
    id: 'dialog',
    name: 'Dialog',
    tagline: 'NETWORK GIANT',
    logo: 'https://island.lk/wp-content/uploads/2023/08/dialog.jpg',
    color: '#ecf0ff',
  },
  {
    id: 'mobitel',
    name: 'Mobitel',
    tagline: 'THE NATIONAL',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlvtWWrTgILd4hGLN9HRgnkbOIIy2rhta-Q&s',
    color: '#ecf0ff',
  },
  {
    id: 'hutch',
    name: 'Hutch',
    tagline: 'ALWAYS BIGGER',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysTF83O6bjsG5jJZIBkpt57X3syfTOceDXQ&s',
    color: '#ecf0ff',
  },
  {
    id: 'airtel',
    name: 'Airtel',
    tagline: 'YOUTH SPIRIT',
    logo: 'https://www.airtel.lk/wp-content/uploads/2021/07/2020-may-1.jpg',
    color: '#ecf0ff',
  },
];

export const OFFERS: Offer[] = [
  {
    id: '1',
    title: '10GB Extra',
    subtitle: 'On your next top up above Rs. 500',
    tag: 'DATA SAVER',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=300',
    color: 'linear-gradient(135deg, #0053cc 0%, #003399 100%)',
  },
  {
    id: '2',
    title: '15% Back',
    subtitle: 'Using Visa Card for any recharge',
    tag: 'CASHBACK',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=300',
    color: 'linear-gradient(135deg, #ff6b00 0%, #a03a0f 100%)',
  },
  {
    id: '3',
    title: 'Night Owl',
    subtitle: 'Unlimited Data 12AM - 5AM',
    tag: 'LIMITED TIME',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300',
    color: 'linear-gradient(135deg, #00c853 0%, #006b0a 100%)',
  },
];

export const PACKS: Pack[] = [
  {
    id: 'unlimited-video',
    name: 'Unlimited Video',
    description: 'YouTube, TikTok, Netflix',
    price: 949,
    validity: '30 Days',
    tag: 'BEST VALUE',
    type: 'data',
  },
  {
    id: 'work-learn',
    name: 'Work & Learn',
    description: '5GB Anytime Data',
    price: 245,
    validity: '7 Days',
    type: 'data',
  },
  {
    id: 'triple-blaster',
    name: 'Triple Blaster',
    description: 'Data + Voice + SMS',
    price: 498,
    validity: '30 Days',
    type: 'voice',
  },
];
