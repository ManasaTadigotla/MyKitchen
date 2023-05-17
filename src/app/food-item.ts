export class FoodItem {
     id!: number;
    name!: string;
    description!:string;
    cooktime!:string;
    quantity:number=0;
    price!:number;
    favourite:boolean=false;
    stars:number=0;
    tags?:string[];
    imageurl!:string;
    //cooktime!:string;
    origins!:string;
    //totalPrice:number=0;
    categoryId!: number;
}
