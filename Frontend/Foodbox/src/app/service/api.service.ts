import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fooditem } from '../class/fooditem';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "http://localhost:9090/fooditem/";

  constructor(private http: HttpClient) { }

  getFooditem(){
    return this.http.get<any>("http://localhost:3000/fooditem")
    .pipe(map((res:any)=>{
      return res;
    }))

  }

  storeFoodItemInfo(fooditem: Fooditem): Observable<string> {
    // this.http.post("http://localhost:9090/product/storeProduct",product).
    // subscribe(result=>console.log(result),error=>console.log(error));

    return this.http.post(`${this.url}storeFoodItem`, fooditem, {
      responseType: 'text',
    });
  }

  retrieveAllFoodItemInfo() {
    return this.http.get<Fooditem[]>(`${this.url}getAllFoodItems`);
  }

  deleteFoodItemInformation(id: number): Observable<string> {
    return this.http.delete(`${this.url}deleteFoodItemInfo/${id}`, {
      responseType: 'text'
    });
  }

  updateFoodItemPrice(id:number,name:string, category:string, price:number, description:string):Observable<string>{
    return this.http.put(`${this.url}updateFoodItemPrice`,{id:id,name:name, category:category,price:price,description:description},{responseType:"text"});
  }

}
