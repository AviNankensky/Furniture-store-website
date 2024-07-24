import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ItemComponent } from './component/item/item.component';
import { ItemListComponent } from './component/item-list/item-list.component';
import { PagestartComponent } from "./pages/pagestart/pagestart.component";
import { SearchComponent } from "./component/search/search.component";
import { CartIconComponent } from "./component/cart-icon/cart-icon.component";
import { MainPageService } from './services/main-page.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ItemComponent, ItemListComponent, PagestartComponent, RouterLink, SearchComponent, CartIconComponent]
})
export class AppComponent  {

  title = 'list';
  selectedCategory: string = 'byCategories';

  constructor(private mainPageService:MainPageService){}

  setTypeOfPage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory = selectElement.value;
    
    
    this.mainPageService.setTypeOfPage(this.selectedCategory)
    // switch(this.selectedCategory) {
    //     case "byCategories":
    //         // פעולות לביצוע כאשר נבחר "קטגוריות"
    //         break;
    //     case "byPrisse":
    //         // פעולות לביצוע כאשר נבחר "לפי מחיר"
    //         break;
    //     case "original":
    //         // פעולות לביצוע כאשר נבחר "מעורבב"
    //         break;
    // }
}
}
  



