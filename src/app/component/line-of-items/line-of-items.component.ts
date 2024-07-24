import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';
import { CommonModule } from '@angular/common';
import { ItemComponent } from "../item/item.component";

@Component({
  selector: 'app-line-of-items',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './line-of-items.component.html',
  styleUrl: './line-of-items.component.css'
})
export class LineOfItemsComponent implements OnInit{
  items:Item[]=[];
  index_:number=0;
  @Input() category!:string;
  constructor(private ItemService:ItemService){
    
  }
  
  ngOnInit() {
  this.loadItems() 
 }
  loadItems(){
    this.items = this.ItemService.getFourItems(this.index_ , this.category)

  }

  left(){
    if (this.index_!==0){
      this.index_--
      this.loadItems() 
 
    }
  }
  rhiget(){
    if (this.index_<(this.ItemService.getlengthBycategory(this.category)-4)){
      this.index_++
      this.loadItems() 
 
    }
  }

}
