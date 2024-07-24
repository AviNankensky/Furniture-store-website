
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ReservedService } from '../../services/reserved.service';


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements AfterViewInit{

  @Input() item!: Item;
  itemIsLike: boolean = false;

  @ViewChild('btn') addButton!: ElementRef;
  @ViewChild('heart') addLikeButton!: ElementRef;

  btn:any;

  constructor(private cartService: CartService, private reservedService: ReservedService) {

    this.btn = document.getElementById("btn")
  }
 
  
  ngAfterViewInit() {
    if (this.reservedService.CheckifItemExists(this.item.Makat)) {
      this.addLikeButton.nativeElement.classList.add('active');
      console.log(this.item.Name + " is in favorites");
      this.itemIsLike = true;
    }
    if(this.cartService.CheckifItemExists(this.item.Makat)){
      
      this.btn.nativeElement.innerText = 'נוסף לסל';
      this.btn.nativeElement.backgroundColor = 'green';
      this.btn.nativeElement.style.color = 'white'; 
    }
  }
  

  addFun(button: HTMLButtonElement) {
    if(this.cartService.CheckifItemExists(this.item.Makat)==false){
    
    button.innerText = 'נוסף לסל';
    button.style.backgroundColor = 'green';
    button.style.color = 'white'; 
    this.cartService.AddItem(this.item)
    }

  }

  // addFun(item: any, button: any) {
  //   if(this.cartService.CheckifItemExists(item.Makat)==false){

  //   button.innerText = 'נוסף לסל';
  //   button.style.backgroundColor = 'green';
  //   button.style.color = 'white'; 
  //   this.cartService.AddItem(item)
  //   }

  // }


  addLike(heart: HTMLElement) {
    if (this.reservedService.CheckifItemExists(this.item.Makat)) {
      this.reservedService.DeletItem(this.item.Makat);
      this.itemIsLike = false;
    } else {
      this.reservedService.addItem(this.item);
      this.itemIsLike = true;
    }
  }
}
