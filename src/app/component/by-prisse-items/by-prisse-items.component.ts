import { Component, Input, input } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';
import { CommonModule } from '@angular/common';
import { ItemComponent } from "../item/item.component";

@Component({
  selector: 'app-by-prisse-items',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './by-prisse-items.component.html',
  styleUrl: './by-prisse-items.component.css'
})
export class ByPrisseItemsComponent {
  items:Item[]=[];
  @Input() orderByType!:string;
  constructor(private itemService:ItemService ){
    this.items= this.itemService.getItemsByPrice()

  }

}
