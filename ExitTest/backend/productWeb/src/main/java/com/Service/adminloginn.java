package com.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Model.adminlogin;
import com.Repository.loginrepo;

@Service
public class adminloginn {
    
	@Autowired
	private loginrepo repo;
	
	 public List<adminlogin> fech() {
		 List<adminlogin> ss = (List<adminlogin>) this.repo.findAll();
		 return ss;
	 }
}
