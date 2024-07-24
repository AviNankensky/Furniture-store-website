import { Routes } from '@angular/router';
import { PagestartComponent } from './pages/pagestart/pagestart.component';
import { ErroComponent } from './pages/erro/erro.component';

import { MoreDetailsComponent } from './pages/more-details/more-details.component';
import { CartComponent } from './pages/cart/cart.component';
// import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { AddItemPageComponent } from './pages/add-item-page/add-item-page.component';

export const routes: Routes = [

    {path:"", component:PagestartComponent , pathMatch: 'full'},
    {path:"items/:id", component:MoreDetailsComponent},
    {path:"cart",component:CartComponent},
    {path:"add-item",component:AddItemPageComponent},
    // {path:"search", component:SearchPageComponent},
    {path:"favorite", component:FavoritePageComponent},
    {path:"**", component:ErroComponent}

    
]