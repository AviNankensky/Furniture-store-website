import { Component, ElementRef, ViewChild } from '@angular/core';
import { Item } from '../../models/Item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-more-details',
  standalone: true,
  imports: [],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {
  @ViewChild('addButton') addButton!: ElementRef;
  @ViewChild('quantity') quantityInput!: ElementRef<HTMLInputElement>;

  id:string;
  item!: Item;

  constructor(private route: ActivatedRoute ,
     private itemService: ItemService,
     private cartService:CartService,
    private router:Router){
    this.id=this.route.snapshot.paramMap.get('id') ?? '0';
    this.item=this.itemService.getItem(this.id)
    // if (this.id =="0") {
    //   this.router.navigate(["**"])
    // }
    
    // if(){

    // }
    // else{

    // }

  }
  add(button: any){
    button.innerText = 'נוסף לסל';
    button.style.backgroundColor = 'green';
    button.style.color = 'white'; 

    let amount = parseInt(this.quantityInput.nativeElement.value);
    for (let i = 0; i < amount; i++) {
      this.cartService.AddItem(this.item);
    }
  }
}
