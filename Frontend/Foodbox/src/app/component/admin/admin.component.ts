import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fooditem } from 'src/app/class/fooditem';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  insertMsg : string = '';
  deleteMsg : string = '';
  flag : boolean = false;
  updateId : number = 0;
  updatePrice : number = 0.0;
  updateName : string = '';
  updateCategory : string = '';
  updateDescription : string = '';
  updateMsg : string ='';

  fooditems : Array<Fooditem> = [];

  constructor(public apiservice:ApiService) { }

  ngOnInit(): void {
   this.retrieveAllFoodItems();
  }

  storeFoodItem(fooditemRef: NgForm) {
    let fooditem = fooditemRef.value;
    console.log(fooditem);
    this.apiservice.storeFoodItemInfo(fooditem).subscribe(
      (result) => {
        this.insertMsg = result;
        this.retrieveAllFoodItems();
      },
      (error) => console.log(error)
    );

    fooditemRef.reset();
  }

  retrieveAllFoodItems() {
    this.apiservice.retrieveAllFoodItemInfo().subscribe(
      (result) => (this.fooditems = result),
      (error) => console.log(error)
    );
  }

  deleteRecord(id: any) {
    console.log('Deleted function called.....' + id);
    this.apiservice.deleteFoodItemInformation(id).subscribe(
      (result) => {
        this.deleteMsg = result;
        this.retrieveAllFoodItems();
      },
      (error) => console.log(error)
    );
  }

  updateRec(fooditem: any) {
    console.log(fooditem);
    this.flag = true;
    this.updateId = fooditem.id;
    this.updateName = fooditem.name;
    this.updateCategory = fooditem.category;
    this.updatePrice = fooditem.price;
    this.updateDescription = fooditem.description;

  }

  updateDbRecord() {
    // console.log(this.updateId+" "+this.updatePrice)
    this.apiservice
      .updateFoodItemPrice(this.updateId,this.updateName, this.updateCategory, this.updatePrice,this.updateDescription)
      .subscribe(
        (result) => {
          this.updateMsg = result;
          this.retrieveAllFoodItems();
          this.flag = false;
        },
        (error) => console.log(error)
      );
  }
}