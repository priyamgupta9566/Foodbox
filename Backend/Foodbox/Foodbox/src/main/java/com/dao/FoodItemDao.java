package com.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bean.FoodItem;

@Repository
public interface FoodItemDao extends JpaRepository<FoodItem, Integer>{
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("delete FoodItem fi where fi.name=:name")
	public int deleteFoodItemByName(@Param("name")String name);
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("update FoodItem fi set fi.price=:price, fi.name=:name ,fi.category=:category , fi.description=:description where fi.id=:id")
	public int updateFoodItemPrice(@Param("id")int id,@Param("name")String name,@Param("category")String category,@Param("price")Integer price,@Param("description")String description);
	
	//select * from product where price between 2000 and 5000
	@Query("select fi from FoodItem fi where fi.price between :min and :max")
	public List<FoodItem> getFilterFoodItem(@Param("min")float minPrice,@Param("max") float maxPrice);

}