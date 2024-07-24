import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';
import { ItemListComponent } from '../../component/item-list/item-list.component';
import { LineOfItemsComponent } from "../../component/line-of-items/line-of-items.component";
import { MainPageService } from '../../services/main-page.service';
import { ByPrisseItemsComponent } from "../../component/by-prisse-items/by-prisse-items.component";

@Component({
    selector: 'app-pagestart',
    standalone: true,
    templateUrl: './pagestart.component.html',
    styleUrls: ['./pagestart.component.css'],
    imports: [CommonModule, ItemListComponent, LineOfItemsComponent, ByPrisseItemsComponent]
})

export class PagestartComponent  {

  SerchPage=false;
  arryOfCategory:string[]=["מטבח", "משרד", "חדר שינה"];
  typeOfPage:string="byCategories";
  constructor(private itemService:ItemService , private mainPageService:MainPageService){
    this.itemService.getSearchText().subscribe(m=>this.f(m))
    this.mainPageService.getSearchText().subscribe(m=>this.ChangePageByType(m))
    
  }
  f(m:string){
    if(m.length>0){
        this.SerchPage=true
    }
    else{
        this.SerchPage=false

    }
  }

  ChangePageByType(type_:string){
    console.log(type_)
    this.typeOfPage=type_
  }

}
