import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { ItemService } from '../../services/item.service';
import { CartService } from '../../services/cart.service';
// import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule,ItemComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent  {

  // items : Item;
  items : Item[]=[];

  constructor(private itemService:ItemService){
     this.itemService.getAllItemsFromServer().subscribe(
        (response) => {
          
          this.items = response;
          // console.log('Loaded items:', this.item ); // וידוא שהפריטים נטענו
        },
        (error) => {
          console.log(error);
        }
      );
    
    // console.log("gggggggggggggg",this.items)
    this.itemService.getSearchText().subscribe(m=> this.f());
  }
  f(){
    console.log(this.itemService.filterItems())
    this.items=this.itemService.filterItems()
  }
  
  
  
  
}
