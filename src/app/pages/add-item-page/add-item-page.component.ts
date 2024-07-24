import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Item } from '../../models/Item';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-add-item-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-item-page.component.html',
  styleUrl: './add-item-page.component.css'
})
export class AddItemPageComponent {
  item:Item;
  constructor(private itemService:ItemService){
    this.item = new Item();
  }
  addItem(){
    this.itemService.addItem(this.item)
  }
}
