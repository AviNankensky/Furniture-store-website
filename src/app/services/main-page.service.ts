import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  private typeOfPage$: BehaviorSubject<string> = new BehaviorSubject<string>("byCategories");
  constructor() { }

  setTypeOfPage(type_:string){
    this.typeOfPage$.next(type_);
  }

  getSearchText(): Observable<string> {
    return this.typeOfPage$.asObservable();
  }
}
