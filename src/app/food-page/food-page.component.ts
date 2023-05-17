import { Component } from '@angular/core';
import { FoodItem } from '../food-item';
import { ActivatedRoute, Router } from '@angular/router';
import { FooditemService } from '../fooditem.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  food!:FoodItem;
  constructor(private aroute:ActivatedRoute,private router: Router, private foodServ:FooditemService,private cartServ:CartService){
    aroute.params.subscribe(params=>{
      if(params['id'])
      this.food=foodServ.getFoodById(params['id']);  
    })
  }

  addToCart()
  {
    this.cartServ.addToCart(this.food);
    this.router.navigateByUrl('cart-page');
  }

}
