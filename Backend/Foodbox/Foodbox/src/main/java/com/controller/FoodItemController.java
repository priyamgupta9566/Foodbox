package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.FoodItem;
import com.service.FoodItemService;

@RestController
@RequestMapping("fooditem")
@CrossOrigin()
public class FoodItemController {
	
	@Autowired
	FoodItemService fooditemservice;
	
	@PostMapping(value="storeFoodItem",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeFoodItemInformation(@RequestBody FoodItem fi)
	{
		return fooditemservice.storeFoodItemInformation(fi);
	}
	
	@GetMapping(value="getAllFoodItems",produces =   MediaType.APPLICATION_JSON_VALUE)
	public List<FoodItem> getAllPFoodItemsInfo(){
		return fooditemservice.getAllFoodItemDetails();
	}
	
	@DeleteMapping(value="deleteFoodItemInfo/{id}")
	public String deleteFodItemInfo(@PathVariable("id")int id) {
		return fooditemservice.deleteFoodItemInfo(id);
	}
	
	@DeleteMapping(value="deleteFoodItembyname/{name}")
	public String deleteFoodItemByName(@PathVariable("name")String name) {
		return fooditemservice.deleteFoodItemByName(name);
	}
	
	@PutMapping(value="updateFoodItemPrice",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateFoodItemPrice(@RequestBody FoodItem fi) {
		return fooditemservice.updateFoodItemPrice(fi);
	}
	
	@GetMapping(value="filterfoodItem/{min}/{max}",produces =   MediaType.APPLICATION_JSON_VALUE)
	public List<FoodItem> getFilterFoodItem(@PathVariable("min")float minPrice,@PathVariable("max") float maxPrice){
		return fooditemservice.getFilterFoodItemInfo(minPrice, maxPrice);
	}
}