import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../services/item.service';
// import { SearchService } from '../../services/search.service';
import { Item } from '../../models/Item';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,RouterLink,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
// [x: string]: any;

  textInput:string=""

  constructor(private itemService:ItemService ) {
    // this.searchService.upCont(this.textInput)
  }
  onTextInputChange() {
    // this.searchService.setSearchText(this.textInput);
    this.itemService.setSearchText(this.textInput);

}

  // search() {
  //   if (this.searchTerm.trim() !== '') {
  //     let allItems =this.itemService.getAllItems()
  //     allItems.forEach((value: Item) => {
  //       if (this.searchTerm.value==value.Name || this.searchTerm.value==value.Makat||this.searchTerm.value==value.Category)
  //         this.searchService.AddItem(value)
  //   });
  //   }
  // }
}