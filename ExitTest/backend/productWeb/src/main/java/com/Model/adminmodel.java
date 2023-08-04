package com.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class adminmodel {
    public adminmodel(int id, String image, String brandname, int productcode, String productname, String description,
			int price) {
		super();
		this.id = id;
		this.image = image;
		this.brandname = brandname;
		this.productcode = productcode;
		this.productname = productname;
		this.description = description;
		this.price = price;
	}
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String image;
	private String brandname;
	private int productcode;
	private String productname;
	private String description;
	private int price;
	
	public int getProductcode() {
		return productcode;
	}
	public void setProductcode(int productcode) {
		this.productcode = productcode;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getBrandname() {
		return brandname;
	}
	public void setBrandname(String brandname) {
		this.brandname = brandname;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public adminmodel() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "adminmodel [id=" + id + ", image=" + image + ", brandname=" + brandname + ", productcode=" + productcode
				+ ", productname=" + productname + ", description=" + description + ", price=" + price + "]";
	}
	
	
	
	
	
}
