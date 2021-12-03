package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class FoodItem {
	
	@Id
	private int id;
	private String name;
	private String category;
	private Integer price;
	private String description;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "FoodItem [id=" + id + ", name=" + name + ", category=" + category + ", price=" + price
				+ ", description=" + description + "]";
	}
}