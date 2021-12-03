package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages = "com")
@EntityScan(basePackages = "com.bean")

public class FoodboxApplication 
{
	public static void main(String[] args) 
	{
		SpringApplication.run(FoodboxApplication.class, args);
		System.err.println("Server running on port 9090...");
	}

}
