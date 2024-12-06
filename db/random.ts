import { DishesType } from "@/types/random"
import images from "../assets/images"

export const tags = ['Starters', 'Mains', 'Desserts', 'Sides']

export const dishes : DishesType = [
    {name: 'Pasta al ragù', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '12', image: images.Bruschetta},
    {name: 'Bruschetta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '12', image: images.GreekSalad},
    {name: 'Risotto alla milanese', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '15', image: images.GrilledFish},
    {name: 'Pasticcio', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '18', image: images.LemonDessert},
    {name: 'Tiramisù', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '10', image: images.Pasta},
]