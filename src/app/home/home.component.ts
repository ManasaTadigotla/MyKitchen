import { Component,OnInit } from '@angular/core';
import { FooditemService } from '../fooditem.service';
import { Router } from '@angular/router';
import { FoodItem } from '../food-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foodItems:FoodItem[]=[];
  constructor(
    private foodServ:FooditemService,
    private route:Router,
    private aroute:ActivatedRoute
    ){}
  ngOnInit(): void {
   // alert(this.aroute.params['searchitem']);
    this.aroute.params.subscribe(params=>{
      if(params['searchitem'])
      {
        //alert(params['searchitem']);
          this.foodItems=this.foodServ.getAll().filter(food=>food.name.toLowerCase().includes(params['searchitem'].toLowerCase()));
      }
      else if(params['tags'])
      {
        alert(params['tags']);
        this.foodItems=this.foodServ.getFoodByTag(params['tags']);
      }
      else
      this.displayFoodItems();
    })
    //this.displayFoodItems();
  }

  displayFoodItems()
  {
    this.foodItems= this.foodServ.getAll();
  }

}
