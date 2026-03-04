// data/fruits.ts
import { ImageSourcePropType } from 'react-native';

export type Fruit = {
    id: number;
    name: string;
    price: number;
    quant: number;
    image: ImageSourcePropType;
};

export const fruitsData: Fruit[] = [
    { id: 1, name: 'Jabłko', price: 2.5, quant: 15, image: require('@/assets/jabłko.png') },
    { id: 2, name: 'Banan', price: 4.0, quant: 8, image: require('@/assets/banan.png') },
    { id: 3, name: 'Truskawka', price: 12.0, quant: 30, image: require('@/assets/truskawka.png') },
    { id: 4, name: 'Pomarańcza', price: 5.5, quant: 12, image: require('@/assets/pomarańcza.jpg') },
    { id: 5, name: 'Kiwi', price: 3.0, quant: 20, image: require('@/assets/kiwi.jpg') },
];