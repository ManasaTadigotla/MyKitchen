import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../tag';
import { FooditemService } from '../fooditem.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{

  constructor(private foodServ:FooditemService){}
  ngOnInit(): void {
    this.tags= this.foodServ.getAllTag();
  }

  @Input()
  foodpagetags?:string[];
  @Input()
  justifyContent:string='';

  tags:Tag[]=[];
  



}
