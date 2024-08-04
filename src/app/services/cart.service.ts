import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { ItemCartContService } from './item-cart-cont.service';
import { ItemCart } from '../models/itemCard';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  item:Item[]=[];
  itemCart:ItemCart[]=[];

  // itemsCart$ = new BehaviorSubject<ItemCart[]>([])
  // totalPrice$ = this.itemsCart$.pipe(
  //   map(items => {
  //     return items.reduce((acc, cartItem) => acc + cartItem.item.Price * cartItem.numOfItem, 0)
  //   })
  // )
  priceSumOfItemsOfCart$:BehaviorSubject<number>;

  constructor(public itemCartContService:ItemCartContService) {
    this.priceSumOfItemsOfCart$= new BehaviorSubject(0)
    
   }
   upDatePriseCont(){
    let r = 0
    for(let i of this.itemCart){
      r+=i.item.price*i.numOfItem
    }
    this.priceSumOfItemsOfCart$.next(r)
   }
   
   AddItem(item:Item){
     if(this.CheckifItemExists(item.makat)){
       
       
       for (let i of this.itemCart) {
         if(item.makat==i.item.makat)
          i.numOfItem++
      }
      
    }
    else{
      this.itemCart.push({item:item,numOfItem:1})
      this.item.push(item);
      this.itemCartContService.upCont()
    }
    this.upDatePriseCont()
  }

  getAllItems() :Item[] {
    return this.item;
  }
  getAllitemCart() :ItemCart[] {
    
    return this.itemCart
  }


  DeletItem(makat: string) {
    this.itemCartContService.downCont();
    
    let index = this.item.findIndex(f => f.makat == makat);
    if (index !== -1) {
      this.item.splice(index, 1);
    }
    
    let cartItemIndex = this.itemCart.findIndex(f => f.item.makat == makat);
    if (cartItemIndex !== -1) {
      this.itemCart.splice(cartItemIndex, 1);
    }
    this.upDatePriseCont()
  }

  CheckifItemExists(makat:string){
    let index = this.item.findIndex(f=>f.makat == makat)
    return index !== -1
  }

  getContOfItemInTheCart(maket:string){
    for(let i of this.itemCart){
      if (i.item.makat==maket){
        return i.numOfItem
      }
    }
    return 1

  }
}
