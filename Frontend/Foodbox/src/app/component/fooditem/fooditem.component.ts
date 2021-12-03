import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.scss']
})
export class FooditemComponent implements OnInit {

  public fooditemList : any;
  public filterCategory : any;
  searchKey : string = "";
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getFooditem()
    .subscribe(res=>{
      this.fooditemList = res;
      this.filterCategory = res;
      this.fooditemList.forEach((a:any) => {
        
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.fooditemList);
    });
    
  this.cartService.search.subscribe((val:any)=>{
    this.searchKey = val;
  })
  }

  addtocart(fooditem : any){
    this.cartService.addtoCart(fooditem);
  }

  filter(category : string){
    this.filterCategory = this.fooditemList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })

  }
}
