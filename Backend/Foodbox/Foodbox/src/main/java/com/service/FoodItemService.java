package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.FoodItem;
import com.dao.FoodItemDao;

@Service
public class FoodItemService {
	
	@Autowired
	FoodItemDao fooditemdao;
	
	public String storeFoodItemInformation(FoodItem fi) {
		boolean result=fooditemdao.existsById(fi.getId());
		if(!result) {
			fooditemdao.save(fi);
			return "Record store successfully";
		}else {
			return "Record didn't store";
		}
	}
	
	public List<FoodItem> getAllFoodItemDetails(){
		return fooditemdao.findAll();
	}
	
	public String deleteFoodItemInfo(int id) {
		if(fooditemdao.existsById(id)) {
			fooditemdao.deleteById(id);
			return "Record deleted sucessfully";
		}else {
			return "Record not present";
		}
	}
	
	public String deleteFoodItemByName(String name) {
		if(fooditemdao.deleteFoodItemByName(name)>0) {
			return "Record deleted successfully";
		}else {
			return "Record not present";
		}
	}
	
	public String updateFoodItemPrice(FoodItem fi) {
		if(fooditemdao.updateFoodItemPrice(fi.getId(),fi.getName(),fi.getCategory(), fi.getPrice(),fi.getDescription())>0) {
			return "Record updated successfully";
		}else {
			return "Record didn't update";
		}
	}
	
	public List<FoodItem> getFilterFoodItemInfo(float minPrice,float maxPrice){
		return fooditemdao.getFilterFoodItem(minPrice, maxPrice);
	}
	

}