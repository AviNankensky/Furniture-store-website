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
  allItemsOfCategory:Item[]=[]
  index_:number=0;
  @Input() category!:string;
  constructor(private itemService:ItemService){
    // this.itemService.getItemsFromServerByCatgoris("חדר שינה").subscribe(
    //   (response) => {
        
    //     this.allItemsOfCatgory = response;
    //     console.log("tfroim cons",this.allItemsOfCatgory)
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
  
  ngOnInit() {
    this.loadItemsFromServer();
  }


  loadItemsFromServer() {
    this.itemService.getItemsFromServerByCatgoris(this.category).subscribe(
      (response) => {
        this.allItemsOfCategory = response;
        console.log("Items loaded:", this.allItemsOfCategory);
        this.loadItems();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadItems() {
    var newListOfItems = this.allItemsOfCategory
    if (this.allItemsOfCategory.length < 5) {
      this.items = this.allItemsOfCategory;
    } else {
      this.items = newListOfItems.slice(this.index_, this.index_ + 4);

    }
    console.log("Loaded items:", this.items);
  }



  left(){
    if (this.index_!==0){
      this.index_--
      this.loadItems() 
 
    }
  }
  rhiget(){
    if (this.index_<this.allItemsOfCategory.length-4){
      this.index_++
      this.loadItems() 
 
    }
  }

}
