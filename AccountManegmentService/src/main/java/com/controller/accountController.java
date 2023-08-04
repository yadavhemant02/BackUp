package com.controller;

import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.UUID;

import org.apache.hc.core5.http.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.Model.AccountModel;

import com.Services.AccountService;

import jakarta.ws.rs.NotFoundException;

@RestController
@RequestMapping("/accounts")
public class accountController {
	
	@Autowired
	private RestTemplate resttemplate;
	
	@Autowired
	private AccountService accountservice;
	
	
	@PostMapping("/")
	public ResponseEntity<?> adddata(@RequestBody AccountModel ss) {
		try {
			Object costomer = this.resttemplate.getForObject("http://costomer-servise/customers/"+ss.getId(), Object.class);
		    System.out.println(costomer);
			if(costomer != null) {
				List<AccountModel> account = (List<AccountModel>)this.accountservice.getsingleaccount(ss.getId());
				if(account.size()!=0) {
					return new ResponseEntity<String>("you are exist already !",HttpStatus.BAD_REQUEST);
				}
				Date currentUtilDate = new Date();
				Random rand = new Random();
				int selected = rand.nextInt(1000000000);
				String s = String.valueOf(selected); 
				String currentUtilString = String.valueOf(currentUtilDate); 
				ss.setCreateat(currentUtilString);
				ss.setAccountbalance(0);
				ss.setAccountnumber(s);
				AccountModel aa = (AccountModel)this.accountservice.addAccount(ss);
				return new ResponseEntity<AccountModel>(ss, HttpStatus.OK);
			}
			return new ResponseEntity<String>("you are not resistered !!"+costomer, HttpStatus.BAD_REQUEST);	
		} catch (Exception e) {
			return new ResponseEntity<String>("Error | Insert yourself..",HttpStatus.BAD_REQUEST);
		}	
	}
	
	@GetMapping("/")
	public List<AccountModel> accountdata(){
		String uniqueID = UUID.randomUUID().toString();
		System.out.println(uniqueID);
		Date currentUtilDate = new Date();
		System.out.println(currentUtilDate);
		List<AccountModel> aa = (List<AccountModel>)this.accountservice.getaccount();
		return aa;
	}
	
	
	
	@GetMapping("/{id}")
	public ResponseEntity<?> accountdata(@PathVariable("id") int id){
		List<AccountModel> aa;
		try {
			 aa = (List<AccountModel>)this.accountservice.getsingleaccount(id);
			 return new ResponseEntity<List<AccountModel>>(aa,HttpStatus.OK);
				
			
		} catch (NotFoundException e) {
			return new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
		
	}
	
	
	
	@DeleteMapping("/{id}")
	public String accountdelet(@PathVariable("id") int id) {
		return this.accountservice.deleteaccount(id);
	}

}
