import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = []
  public fooditemList = new BehaviorSubject<any>([]);
  public search =  new BehaviorSubject<string>("");

  constructor() { }
  getfooditems(){
    return this.fooditemList.asObservable();
  }

  setfooditems(fooditem : any){
      this.cartItemList.push(...fooditem);
      this.fooditemList.next(fooditem);
  }

  addtoCart(fooditem : any){
    this.cartItemList.push(fooditem);
    this.fooditemList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
      console.log(this.cartItemList);
    })
    return grandTotal;
  }

  removeCartItem(fooditem : any){
    this.cartItemList.map((a:any, index:any)=>{
      if(fooditem.id==a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.fooditemList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.fooditemList.next(this.cartItemList);
  }
}
