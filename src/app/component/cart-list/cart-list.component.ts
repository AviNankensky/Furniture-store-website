import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Item } from '../../models/Item';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';
import { ItemCartContService } from '../../services/item-cart-cont.service';
import { ItemCart } from '../../models/itemCard';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  items: Item[];
  itemCart:ItemCart[]=[];
  numOfItemInTheCart:number=0;
  @Output() deleteFromList = new EventEmitter<string>();

  constructor(protected cartService: CartService, private itemCartContService:ItemCartContService) {
    this.items = this.cartService.getAllItems();
  }


  deleteItem(makat:string){
    this.cartService.DeletItem(makat);

  }
  getNumOfItemsInCart(makat:string) :number{  
    return this.cartService.getContOfItemInTheCart(makat)
    
  }
}
