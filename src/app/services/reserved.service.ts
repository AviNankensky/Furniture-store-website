import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservedService {

  private eventeOfItamList$: BehaviorSubject<string> = new BehaviorSubject<string>(" ");

  items:Item[]=[];
  constructor() { 
    
  }

  // CheckifItemExists(makat:string){
  //   let index = this.items.findIndex(f=>f.Makat == makat)
  //   if (index=0){
  //     return false
  //   }
  //   return true
  // }
  CheckifItemExists(makat:string){
    let index = this.items.findIndex(f=>f.makat == makat)
    return index !== -1
  }
  addItem(item:Item){
    this.eventeOfItamList$.next(" - ")
    this.items.push(item);
    // console.log(item.Name)
    
  }
  getEventOfItemList(){
    return this.eventeOfItamList$.asObservable();
  }
  
  DeletItem(makat:string){
    let index = this.items.findIndex(f=>f.makat == makat)
    this.items.splice(index,1);
   }

   getAllItems() :Item[] {
    
    return this.items;
  }
  print_(){
    for(let i of this.items){
      console.log(i.name)
    }

  }

}
