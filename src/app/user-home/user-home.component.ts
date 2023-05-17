import { Component, OnInit } from '@angular/core'; 
import { FoodItem } from '../food-item';
import { HttpClient } from '@angular/common/http';
import { FooditemService } from '../fooditem.service';
import { Category } from '../category';



@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  //foodByCategory:string[]=['idly','dosa','roti','paneer butter masala','utappam','onion dosa','b']
  foodItem:string="";
  itemsAdded:number=0;
  fooditems:FoodItem[]=[];
  categories!:Category[];
  categoriesList:Category[]=[];
  selectedFoodItems:FoodItem[]=[];
  beforevalue:number=0;
  itemCount:number=0;
  isItemSelected:boolean=false;
  isMenuVisible:boolean=false;
  private apiUrl="http://localhost:8188/"

  constructor(http:HttpClient,private fooditemServ:FooditemService){}
  ngOnInit(): void {
   this.displayFoodCategories();
   //this.isItemSelected=true;
   // this.displayategoryList();
    
    console.log(this.categories);

  }

  onQuantityChange(quantity:number)
  {
    if(quantity>0)
    {
      alert(quantity);
      this.isItemSelected=true;
    }
    console.log(quantity);
    if(quantity==0)
    {
      if(this.beforevalue>0)
      {
      this.itemsAdded--;
      }
    }
    else if(quantity>0)
    {
      if(this.beforevalue==0)
      {
      this.itemsAdded++;
      }
    }
   // this.fooditems.forEach(element => {
     // if(element.quantity>0)
      //{
        //this.itemsAdded++;
     // }
    //});
    //this.itemCount++;
    console.log(this.itemsAdded);
  }
  onCheckout()
  {
    let itemsCount=0;
    this.selectedFoodItems= this.fooditems.filter(f=>f.quantity>0);
    /*
    {
      if(f.quantity>0)
      {
        alert(f.quantity);
        itemsCount++;
        f.totalPrice=f.quantity*f.price;
      }
      return f.quantity>0;
    }
    );
  */
    alert(itemsCount);
    alert(this.selectedFoodItems.length);
  }

  beforeChange(quantity:number)
  {
    this.beforevalue=quantity;
    console.log("before value"+this.beforevalue)
  }
  
  plus(quantity:number)
  {
    alert(quantity);
    alert(this.itemsAdded);
    if(quantity==1)
    {
    this.itemsAdded++;
    alert(this.itemsAdded);
    }
    console.log(this.itemsAdded);
  }
  minus(quantity:number)
  {
    alert(quantity);
    if(quantity==0)
    {
    this.itemsAdded--;
    alert(this.itemsAdded);
    }
    console.log(this.itemsAdded);
  }
displayFoodCategories()
{
  this.fooditemServ.getFoodCategories().subscribe(data=>{
    this.categories=data;
  })
  
}

  searchFoodItem()
  {
    if(this.foodItem=="")
    {
      
    }
    else
    {
        this.fooditemServ.getFoodItems().subscribe(data=>{
          this.fooditems=data;
          console.log(this.fooditems);
        });
    }


  }

  onCategorySelect(id:any)
  {
      this.fooditemServ.getFoodItemsByCategoryId(id).subscribe(data=>{
        this.fooditems=data;
      })
      if(this.fooditems.length>0)
      {
        //alert("hi");
        this.isMenuVisible=true;
        this.isItemSelected=true;
      }
  }

}
function forEach(e: any, fooditems: FoodItem[]) {
  throw new Error('Function not implemented.');
}

