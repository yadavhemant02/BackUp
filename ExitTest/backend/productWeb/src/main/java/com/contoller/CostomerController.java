package com.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Model.costomerModel;
import com.Service.costomerService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CostomerController {
	
	@Autowired
	private costomerService servicecostomer;
	
	@PostMapping("/take")
	public costomerModel takedata(@RequestBody costomerModel ss,Model m) {
		
		
		costomerModel aa = (costomerModel) this.servicecostomer.add(ss);
	    
		return aa;
		
		
	
		
	}
	@GetMapping("/get")
	public List<costomerModel> getdata() {
		List<costomerModel> aa = this.servicecostomer.takedata();
		return aa;
	}

}
