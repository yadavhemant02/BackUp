package com.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Model.AccountModel;
import com.Model.transectionDetailModel;
import com.Services.AccountService;
import com.Services.TranscationDetailService;

@RestController
@RequestMapping("/transcations")
public class TranscationDetailController {

	
	@Autowired
	private TranscationDetailService transcationdetailservice;
	
	@Autowired
	private AccountService accountservice;
	
	@PostMapping("/withdrawmoney")
	public transectionDetailModel withdrowmoney(@RequestBody transectionDetailModel ss) {
		AccountModel account = (AccountModel)this.accountservice.getsingleobjectaccount(ss.getAccountid());
		String uniqueID = UUID.randomUUID().toString();
		ss.setTransactionid(uniqueID);
		ss.setSource("online");
		ss.setCreateat(account.getCreateat());
		transectionDetailModel aa = (transectionDetailModel)this.transcationdetailservice.withdrow(ss);
		return aa;
		
	}
	
	@PostMapping("/addmoney")
	public transectionDetailModel creditmoney(@RequestBody transectionDetailModel ss) {
		AccountModel account = (AccountModel)this.accountservice.getsingleobjectaccount(ss.getAccountid());
		String uniqueID = UUID.randomUUID().toString();
		ss.setTransactionid(uniqueID);
		ss.setSource("online");
		ss.setCreateat(account.getCreateat());
		transectionDetailModel aa = (transectionDetailModel)this.transcationdetailservice.credit(ss);
		return aa;
	}
	
	@GetMapping("/")
	public List<transectionDetailModel> alltranscation(){
		List<transectionDetailModel> aa = (List<transectionDetailModel>)this.transcationdetailservice.getalltranscation();
		return aa;
	}
}
