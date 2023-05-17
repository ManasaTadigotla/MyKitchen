import { FoodItem } from "./food-item";

export class CartItem {

    food:FoodItem;
    quantity!:number;
    constructor(food:FoodItem){
        this.food=food;
        //this.getPrice();
    }

    get Price():number
    {
        return this.food.price*this.quantity;
    }

}
