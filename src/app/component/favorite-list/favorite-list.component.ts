import { Component } from '@angular/core';
import { Item } from '../../models/Item';
import { ReservedService } from '../../services/reserved.service';
import { ItemComponent } from "../item/item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [CommonModule,ItemComponent],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css'
})
export class FavoriteListComponent {

  items:Item[]=[];
  constructor(private reservedService:ReservedService ){
    this.items = this.reservedService.getAllItems()
    this.reservedService.getEventOfItemList().subscribe(m=>this.f())
  }
  f(){
    this.items = this.reservedService.getAllItems()
    console.log(this.items)
  }

  
}
