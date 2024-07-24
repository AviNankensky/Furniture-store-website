import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ItemCartContService {
  numOfItems:BehaviorSubject<number>;
  constructor() { 
    this.numOfItems = new BehaviorSubject(0);
  }

  upCont() {
    const currentValue = this.numOfItems.value;
    this.numOfItems.next(currentValue + 1);
  }
  downCont() {
    
    const currentValue = this.numOfItems.value;
    this.numOfItems.next(currentValue - 1);
  }
  getCont():BehaviorSubject<number>{
    return this.numOfItems
  }

  
}
