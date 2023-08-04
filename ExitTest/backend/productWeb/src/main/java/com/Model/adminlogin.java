package com.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class adminlogin {
      
	@Id
	private String name;
	private String password;
	public adminlogin(String name, String password) {
		super();
		this.name = name;
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public adminlogin() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "adminlogin [name=" + name + ", password=" + password + "]";
	}
	
	
	
}
