import { CartItem } from "./cartitem";

export class Cart{
    items:CartItem[]=[];
    //totalprice:number=0;

    get totalprice():number{
        let totalprice=0;
        this.items.forEach(item => {
            totalprice+=item.Price;
        });
        return totalprice;
    }
}