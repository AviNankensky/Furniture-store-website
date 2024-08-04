import { Injectable, OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService  implements OnInit{
  // forEach(arg0: (value: Item) => void) {
  //   throw new Error('Method not implemented.');
  // }
  private searchText$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  item : Item[]=[];
  constructor( private http: HttpClient) {
   // this.loadItems()
    
    // this.getItemFromServer().subscribe(
    //   (response) => {
    //     console.log('Response from server:', response);
    //   },
    //   (error) => {
    //     console.error('Error fetching item from server:', error);
    //   }
    // );
   
    
    
    // this.insortItem({
    //   Makat: "GdG", 
    //   Name: "כיסא", 
    //   Description: "כיסא נוח ומעוצב, מושלם לישיבה ממושכת. מתאים לשולחנות עבודה או לאירוח חברים בבית.", 
    //   Price: 50, 
    //   Qty: 1, 
    //   Category: "מטבח", 
    //   Img: "/img/כיסה.jpeg"
    // }).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    
    // if (localStorage.getItem("items")!=undefined && localStorage.getItem("items")!=null){
    //   this.getAllItemsFromLocalStorage()

    // }
    // else{
    //   this.item.push({Makat:"GGG", Name:"כיסא", Description:"כיסא נוח ומעוצב, מושלם לישיבה ממושכת. מתאים לשולחנות עבודה או לאירוח חברים בבית.", Price:50, Qty:1, Category:"מטבח", Img:"/img/כיסה.jpeg"});
    //   this.item.push({Makat:"GDD", Name:"שולחן", Description:"שולחן איכותי ומרווח, מתאים לפינת האוכל או למשרד. עשוי מעץ מלא בעיצוב מודרני.", Price:100, Qty:1, Category:"מטבח", Img:"/img/הורדה (8).jpeg"});
    //   this.item.push({Makat:"GDG", Name:"שידה", Description:"שידה קומפקטית עם מספר מגירות לאחסון. מושלמת לחדר השינה או למסדרון.", Price:30, Qty:1, Category:"חדר שינה", Img:"/img/הורדה (7).jpeg"});
    //   this.item.push({Makat:"DDG", Name:"מיטה", Description:"מיטה זוגית עם מסגרת עץ חזקה. מגיעה עם מזרן אורטופדי לנוחות מקסימלית ושינה ערבה.", Price:200, Qty:1, Category:"חדר שינה", Img:"/img/הורדה (9).jpeg"});
      
    //   this.item.push({Makat:"HHH", Name:"ארון בגדים", Description:"ארון בגדים רחב עם דלתות הזזה ומספר מדפים ומגירות פנימיות. מתאים לחדר שינה או לחדר ילדים.", Price:350, Qty:1, Category:"חדר שינה", Img:"/img/ארון.jpeg"});
    //   this.item.push({Makat:"HHI", Name:"כורסה", Description:"כורסה מפנקת עם ריפוד רך ומשענת גב מתכווננת. מושלמת לקריאת ספר או צפייה בטלוויזיה.", Price:150, Qty:1, Category:"מטבח", Img:"/img/כורסה.jpg"});
    //   this.item.push({Makat:"HHJ", Name:"שולחן קפה", Description:"שולחן קפה קטן ומעוצב, מתאים לסלון או לפינת הישיבה. עשוי מעץ מלא עם גימור חלק.", Price:80, Qty:1, Category:"משרד", Img:"/img/שולחן קפה.jpeg"});
    //   this.item.push({Makat:"HHK", Name:"כוורת", Description:"כוורת מדפים מודולרית לאחסון ספרים, חפצים או תיקים. ניתן להרכיב בקלות ולמקם בכל חדר.", Price:120, Qty:1, Category:"חדר שינה", Img:"/img/כורת.jpeg"});
    //   this.item.push({Makat:"HHL", Name:"שולחן עבודה", Description:"שולחן עבודה מרווח עם שטח עבודה גדול ומגירות לאחסון. מושלם למשרד או לחדר עבודה ביתי.", Price:250, Qty:1, Category:"מטבח", Img:"/img/שולחן עבודה.jpeg"});
    //   this.item.push({Makat:"HHM", Name:"ספרייה", Description:"ספרייה גבוהה ורחבה לאחסון ספרים, קישוטים ומסמכים. עשויה מעץ איכותי בעיצוב קלאסי.", Price:300, Qty:1, Category:"משרד", Img:"/img/ספריה.jpeg"});
    //   this.item.push({Makat:"HHN", Name:"שולחן אוכל", Description:"שולחן אוכל גדול המתאים לארוחות משפחתיות או לאירוח חברים. עשוי מעץ מלא ומעוצב בקפידה.", Price:400, Qty:1, Category:"מטבח", Img:"/img/הורדה (14).jpeg"});
    //   this.item.push({Makat:"HHO", Name:"מזנון", Description:"מזנון מעוצב לסלון עם מדפים פתוחים ומגירות. מושלם לאחסון ושימוש רב תכליתי.", Price:220, Qty:1, Category:"חדר שינה", Img:"/img/הורדה (15).jpeg"});
    //   this.item.push({Makat:"HHP", Name:"מדף תלוי", Description:"מדף תלוי לקיר, מתאים לאחסון חפצים קטנים או קישוטים. עיצוב מודרני ונקי.", Price:60, Qty:1, Category:"חדר שינה", Img:"/img/הורדה (16).jpeg"});
    //   this.item.push({Makat:"HHQ", Name:"ספסל", Description:"ספסל מעוצב לכניסה לבית או לגינה. נוח לישיבה ומוסיף אלמנט עיצובי לחלל.", Price:90, Qty:1, Category:"חדר שינה", Img:"/img/הורדה (17).jpeg"});
    //   this.item.push({Makat:"HHR", Name:"מזנון טלוויזיה", Description:"מזנון לטלוויזיה עם שטח אחסון לממירים וקונסולות. עיצוב מודרני עם דלתות הזזה.", Price:180, Qty:1, Category:"חדר שינה", Img:"/img/הורדה (11).jpeg"});
    //   this.item.push({Makat:"HHS", Name:"מדף ספרים", Description:"מדף ספרים גבוה ורחב, מושלם לאחסון ספרים, תמונות וקישוטים. עשוי מעץ מלא.", Price:140, Qty:1, Category:"משרד", Img:"/img/מדף ספרים.jpeg"});
    //   this.item.push({Makat:"HHT", Name:"ארון אמבטיה", Description:"ארון אמבטיה מעוצב עם מספר מדפים לאחסון כלי רחצה ומגבות. עשוי מחומרים עמידים במים.", Price:130, Qty:1, Category:"חדר שינה", Img:"/img/כוננית למקלחת.jpeg"});
    //   this.item.push({Makat:"HHU", Name:"מיטה קומותיים", Description:"מיטה קומותיים לילדים, מושלמת לחדרי ילדים קטנים. עשויה מעץ מלא ובעלת עיצוב בטיחותי.", Price:500, Qty:1, Category:"מטבח", Img:"/img/הורדה (12).jpeg"});
    //   this.item.push({Makat:"HHV", Name:"כוננית", Description:"כוננית מדפים רחבה ועמוקה לאחסון חפצים כבדים או קישוטים. עיצוב תעשייתי מודרני.", Price:270, Qty:1, Category:"משרד", Img:"/img/הורדה (13).jpeg"});
    //   this.item.push({Makat:"HHW", Name:"כסא משרדי", Description:"כסא משרדי ארגונומי עם ריפוד נוח ומשענת מתכווננת. מתאים לעבודה ממושכת מול מחשב.", Price:190, Qty:1, Category:"משרד", Img:"/img/כיסה משרדי.jpeg"});
    //   this.item.push({Makat:"HHX", Name:"תיבת אחסון", Description:"תיבת אחסון גדולה עם מכסה, מושלמת לאחסון פריטים גדולים או חפצים עונתיים.", Price:70, Qty:1, Category:"משרד", Img:"/img/תיבת איחסון.jpeg"});
    //   localStorage.setItem("items",JSON.stringify(this.item))
    // }

    // for (let i of this.item) {
      //   this.insortItem(i).subscribe(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
      //       console.log(error);
    //     }
    //   );
    // }
  }

  // loadItems() {
  //   this.getAllItemsFromServer().subscribe(
  //     (response: any[]) => {
  //       this.item = response.map(item_ => ({
  //         Makat: item_.Makat,
  //         Name: item_.Name,
  //         Description: item_.Description,
  //         Price: item_.Price,
  //         Qty: item_.Qty,
  //         Img: item_.Img,
  //         Category: item_.Category
  //       }));
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  
  
  ngOnInit(){
    this.getAllItemsFromServer().subscribe(
      (response) => {
        
        this.item = response;
        // console.log('Loaded items:', this.item ); // וידוא שהפריטים נטענו
      },
      (error) => {
        console.log(error);
      }
    );
    
  }
  loadItems(): void {
    if (this.item.length==0){

      this.getAllItemsFromServer().subscribe(
        (response) => {
          
          this.item = response;
          // console.log('Loaded items:', this.item ); // וידוא שהפריטים נטענו
        },
        (error) => {
          console.log(error);
        }
      );
    }
    console.log('Loaded items:', this.item ); // וידוא שהפריטים נטענו
  }

  

  getItems(): Item[] {
    return this.item;
  }

  getAllItemsFromServer(): Observable<Item[]> {
    return this.http.get<Item[]>('https://localhost:7289/Items/get-all-items');
  }

  getItemFromServer(){
    return this.http.get(`https://localhost:7289/Items/get-item/GGG` ,{ responseType: 'text'});

  }

  getItemsFromServerByCatgoris(category:string): Observable<Item[]>{
    return this.http.get<Item[]>(`https://localhost:7289/Items/by-category/${category}` );
  }
  

  
  insortItem(item: Item) {
    return this.http.post(`https://localhost:7289/Items/add-item`, item, { responseType: 'json' });
  }
  getItemsByPrice(): Item[] {
    // העתקת המערך המקורי כדי לא לשנות אותו
    let itemsByPrice: Item[] = this.item; // אתחול המשתנה עם העתק של this.items
    
    
    // מיון המערך לפי מחיר מהנמוך לגבוה
    itemsByPrice.sort((a, b) => a.price - b.price);
    
    return itemsByPrice;
  }
  getlengthBycategory(category: string){
    let cont=0;
    for (let i of this.item) {
      if (i.category == category) {
          cont++
        }
    }
    return cont
    
  }
  getFourItemsByCategory(index: number, category: string): Item[] {
    let byCategory: Item[] = [];

    
    
    for (let i of this.item) {
        if (i.category == category) {
            byCategory.push(i);
        }
    }

    if (index >= 0 && index < byCategory.length-4) {
        return byCategory.slice(index, index + 4);
      }
    else{
      if(byCategory.length>4){
        return [byCategory[byCategory.length-4],byCategory[byCategory.length-3],byCategory[byCategory.length-2],byCategory[byCategory.length-1]];
      }
      return byCategory
    }
}
  getAllItems() :Item[] {
    this.getAllItemsFromLocalStorage()
    
    return this.item;
  }
  
  
  getItem(makat:string){
    this.getAllItemsFromLocalStorage()
    
    let item :Item = this.item.filter(f=>f.makat== makat)[0];
    return item
  }
  DeliteItem(makat:string){
    let index = this.item.findIndex(f=>f.makat == makat)
    this.item.splice(index,1);
  }
  
  getAllItemsFromLocalStorage(){
    // this.loadItems()
    
    

    let localStorageItems:string = localStorage.getItem("items")??"";
    this.item=JSON.parse(localStorageItems);
  
  }
  addItem(item:Item){
    let localStorageItems:string = localStorage.getItem("items")??"";
    this.item=JSON.parse(localStorageItems);
    if(this.getItem(item.makat)==undefined ||this.getItem(item.makat)==null){
      this.item.push(item)
      localStorage.setItem("items",JSON.stringify(this.item))
    }
  }
  setSearchText(text: string): void {
    this.searchText$.next(text);
    this.item=this.filterItems()
    
  }
  
  getSearchText(): Observable<string> {
    return this.searchText$.asObservable();
  }
  filterItems(): Item[] {
    const searchText = this.searchText$.getValue().toLowerCase();
  
    if (searchText.length === 0) {
      return this.getAllItems();
    }
  
    return this.getAllItems().filter(item => 
      (item.name && item.name.toLowerCase().includes(searchText)) ||
      (item.makat && item.makat.toLowerCase().includes(searchText)) ||
      (item.category && item.category.toLowerCase().includes(searchText))
    );
  }
}
