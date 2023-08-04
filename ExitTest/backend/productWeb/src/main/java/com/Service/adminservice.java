package com.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Model.adminmodel;
import com.Repository.adminrepository;

@Service
public class adminservice {
	
	@Autowired
	private adminrepository repoadmin;
	
	public adminmodel adddata(adminmodel ss){
		adminmodel aa = (adminmodel) this.repoadmin.save(ss);
		return aa;
		
	}
	
	public List<adminmodel> show(){
		List<adminmodel> list = (List<adminmodel>) this.repoadmin.findAll();
		return list;
	}
	
	public  Optional<adminmodel> getsingle(int id) {
		 Optional<adminmodel> aa =  (Optional<adminmodel>) this.repoadmin.findById(id);
		return aa;
	}
	
	public void update(String file,int id) {
		List<adminmodel> list = (List<adminmodel>) this.repoadmin.findAll();
	
		list=list.stream().map(b->{
			if(b.getId()==id) {
				b.setImage(file);
			    System.out.println(file);
			    this.repoadmin.save(b);
			}
			return b;
		}).collect(Collectors.toList());
		
		
		
	}
	
	public adminmodel unick(int productcode) {
		
		adminmodel aa = (adminmodel) this.repoadmin.findByproductcode(productcode);
		
		return aa;
		
	}
	
	public void delete(int id) {
		 this.repoadmin.deleteById(id);
		 
	}
	
	

}
