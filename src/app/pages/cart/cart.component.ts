import { Component } from '@angular/core';
import { CartListComponent } from "../../component/cart-list/cart-list.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
