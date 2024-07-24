import { Component } from '@angular/core';
import { Item } from '../../models/Item';
import { ReservedService } from '../../services/reserved.service';
import { ItemComponent } from "../../component/item/item.component";
import { FavoriteListComponent } from "../../component/favorite-list/favorite-list.component";

@Component({
  selector: 'app-favorite-page',
  standalone: true,
  imports: [ItemComponent, FavoriteListComponent],
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.css'
})
export class FavoritePageComponent {
  // item:Item[]=[];
  // constructor(private reservedService:ReservedService ){
  //   this.item = reservedService.getAllItems();
  // }
  
  // print(){
  //   this.reservedService.print();
  // }
}
