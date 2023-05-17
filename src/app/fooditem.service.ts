import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodItem } from './food-item';
import { Category } from './category';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root'
})
export class FooditemService {

  constructor(
   private http:HttpClient
  ) { }

  private apiUrl:String= "http://localhost:8188/fooditems";
  private apiUrlCategory="http://localhost:8188/categories";

    getFoodCategories():Observable<Category[]>
    {
      return this.http.get<Category[]>(`${this.apiUrlCategory}`);
    }

  getFoodItems():Observable<FoodItem[]>
  {
    return this.http.get<FoodItem[]>(`${this.apiUrl}`);
  }

  getFoodItemsByCategoryId(id:any)
  {
    return this.http.get<FoodItem[]>(`${this.apiUrl}/${id}`);
  }

  addFoodItem(item: FoodItem):Observable<object>
  {
    return this.http.post('${this.apiUrl',item);
  }

  //////////////////////////////

  getAllTag():Tag[]{
    return [
      {name:'All',count:10},
      {name:'biriyani',count:4},
      {name:'breakfast',count:4},
      {name:'fastfood',count:3},
      {name:'pizza',count:2},
      {name:'starters',count:4},
      {name:'fry',count:3}
    ];
  }

  getAll():any[]
  {
    return [
      {
        id:101,
        name:"idly",
        description:"idly 4 quantity",
        cooktime:"20 mins",
        price:50,
        favourite:true,
        stars:4,
        imageurl:"assets/idly-bf.jpg",
        tags:['breakfast'],
        categoryId:201
      },
      {
        id:102,
        name:"dosa",
        description:"dosa with aloo curry",
        cooktime:"20 mins",
        price:50,
        favourite:true,
        stars:4.5,
        imageurl:"assets/dosa-bf.jpg",
        tags:['breakfast'],
        categoryId:201
      },
      {
        id:103,
        name:"chicken biriyani",
        description:"dum biriyani with leg piece",
        cooktime:"30 mins",
        price:250,
        favourite:true,
        stars:4.5,
        imageurl:"assets/chichen biriyani-b.jpg",
        tags:['biriyani','lunch'],
        categoryId:203
      },
      {
        id:104,
        name:"mutton biriyani",
        description:"mutton fried biriyani",
        cooktime:"30 mins",
        price:250,
        favourite:true,
        stars:5,
        imageurl:"assets/mutton biriyani-b.jpg",
        tags:['biriyani'],
        categoryId:203
      },
      {
        id:105,
        name:"roti",
        description:"roti 2 pieces",
        cooktime:"30 mins",
        price:25,
        favourite:true,
        stars:4,
        imageurl:"assets/roti-dal.jpg",
        tags:["breakfast","lunch"],
        categoryId:201
      }
    ]
  }

  getFoodById(id:number):FoodItem
  {
    return this.getAll().find(item=>item.id==id);
  }

  getFoodByTag(tag:string):any[]
  {
    if(tag.toLocaleLowerCase()=="all")
    {
      return this.getAll();
    }
    else
    {
      return this.getAll().filter(food=>food.tags?.includes(tag));
    }
  }
}
