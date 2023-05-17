import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { CartItem } from '../cartitem';
import { FooditemService } from '../fooditem.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  cart!:Cart;
  isPaymentSuccess:boolean=true;
  constructor(private cartServ:CartService,private foodServ:FooditemService){
   let foods= foodServ.getAll();
   cartServ.addToCart(foods[1]);
   cartServ.addToCart(foods[3]);
   cartServ.addToCart(foods[4]);
   cartServ.addToCart(foods[2]);
    this.setCart();
  }
  ngOnInit(): void {
    
  }

  paymethod()
  {
    alert("payment Succedd");
    this.isPaymentSuccess=false;
  }
  setCart()
  {
    this.cart=this.cartServ.getCart();
  }

  removeFromCart(cartItem:CartItem)
  {
    alert(cartItem.food.id);
    this.cartServ.removeFromCart(cartItem.food.id);
    this.setCart();

  }

  changeQuantity(cartItem:CartItem,quantity:string)
  {
    let qty:number=parseInt(quantity);
    this.cartServ.changeQuantity(cartItem.food.id,qty);
  }


}
