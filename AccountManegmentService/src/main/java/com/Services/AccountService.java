package com.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Model.AccountModel;
import com.Repository.AccountRepository;

import jakarta.ws.rs.NotFoundException;

@Service
public class AccountService {

	@Autowired
	private AccountRepository accountrepository;
	
	public AccountModel addAccount(AccountModel ss) {
		AccountModel aa;
		try {
			
			 aa = (AccountModel)this.accountrepository.save(ss);
			System.out.println(aa);
		} catch (NotFoundException e) {
			throw new ArithmeticException("you are not resistered !!;");
		}
		return aa;
	}
	
	
	public List<AccountModel> getaccount(){
		List<AccountModel> ss = (List<AccountModel>)this.accountrepository.findAll();
		System.out.println(ss);
		return ss;
	}
	
	public String deleteaccount(int id) {
			
			this.accountrepository.deleteById(id);
			return "Delete SuccessFully";
		
	}


	public List<AccountModel> getsingleaccount(int id) {
		// TODO Auto-generated method stub
		try {
			List<AccountModel> aa = (List<AccountModel>)this.accountrepository.finddById(id);
			return aa;
		} catch (Exception e) {
			throw new NotFoundException("Error | account not found !");
		}
		
	}


	public AccountModel getsingleobjectaccount(int accountid) {
		Optional<AccountModel> aa = accountrepository.findById(accountid);
		
		return aa.get();
	}
	
	
}
