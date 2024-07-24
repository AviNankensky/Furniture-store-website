import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ItemCartContService } from '../../services/item-cart-cont.service';


@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.css'
})
export class CartIconComponent {
  numOfItems:number=0;
  
  constructor(private cartService: CartService , private itemCartContService:ItemCartContService){

    this.itemCartContService.getCont().subscribe(m=>this.numOfItems=m)
    console.log('New numOfItems value:', this.numOfItems);
  }

  
}
