package com.Controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.Model.CostomerModel;
import com.Services.CostomerService;

@RestController
@RequestMapping("/customers")
public class CostomerController {
	
	@Autowired
	private RestTemplate resttemplate;
	
	@Autowired
	private CostomerService costomerService;
	
	@PostMapping("/")
	public CostomerModel adddata(@RequestBody CostomerModel ss) {
		CostomerModel aa = (CostomerModel)this.costomerService.addCostomer(ss);
		return aa;
	}
	
	@GetMapping("/")
	public List<CostomerModel> alldata(){
		List<CostomerModel> aa = (List<CostomerModel>)this.costomerService.allCostomer();
		aa=aa.stream().map(b->{
			List costomer = this.resttemplate.getForObject("http://account-servise/accounts/"+b.getId(), List.class);
			if(costomer.size()!=0) {
				b.setAccount(costomer);
				System.out.println(b);
			}
			return b;
		}).collect(Collectors.toList());
		return aa;	
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> singledata(@PathVariable("id") int aa) {
		try {
			List costomer = this.resttemplate.getForObject("http://account-servise/accounts/"+aa, List.class);
			CostomerModel ss = (CostomerModel)this.costomerService.singleCostomer(aa);
			ss.setAccount(costomer);
			return new ResponseEntity<CostomerModel>(ss, HttpStatus.OK);
		} catch (ArithmeticException e) {
			return new ResponseEntity<String>("Arith "+e.getMessage(), HttpStatus.BAD_REQUEST);
		}catch(Exception e) {
			return new ResponseEntity<String>("totall "+e.getMessage(), HttpStatus.BAD_REQUEST);
		}
		
	
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updatedata(@PathVariable("id") int aa, @RequestBody CostomerModel ss) {
		try {
			 String dd = this.costomerService.update(ss, aa);
			 return new ResponseEntity<String>(dd,HttpStatus.OK);
		} catch (ArithmeticException e) {
			return new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deletdata(@PathVariable("id") int id) {
		try {
			 String aa = this.costomerService.deletcostomer(id);
			 return new ResponseEntity<String>(aa,HttpStatus.OK);
		} catch (ArithmeticException e) {
			return new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
	         
	
		
	}

}
