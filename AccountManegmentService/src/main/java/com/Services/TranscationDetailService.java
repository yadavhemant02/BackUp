package com.Services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Model.AccountModel;
import com.Model.transectionDetailModel;
import com.Repository.AccountRepository;
import com.Repository.TranscationDetailRepository;

@Service
public class TranscationDetailService {
	
	@Autowired
	private AccountRepository accountrepository;
	
	@Autowired
	private TranscationDetailRepository transcationdetailrepo;
	
	public transectionDetailModel addtranscation(transectionDetailModel ss) {
		transectionDetailModel aa = (transectionDetailModel)this.transcationdetailrepo.save(ss);
		return aa;
	}

	public transectionDetailModel withdrow(transectionDetailModel ss) {
		// TODO Auto-generated method stub
		
		
		List<AccountModel> list = (List<AccountModel>)this.accountrepository.findAll();
		
		list=list.stream().map(b->{
			if(b.getId()==ss.getAccountid()) {
				if(b.getAccountbalance()>=ss.getAmount()) {
					b.setAccountbalance(b.getAccountbalance()-ss.getAmount());
					ss.setCreateat(b.getCreateat());
					ss.setStatus("successfull");
				}
				else {
					ss.setCreateat(b.getCreateat());
					ss.setStatus("Unsuccessful");
				}
			    System.out.println(b);
			    this.accountrepository.save(b);
			}
			return b;
		}).collect(Collectors.toList());
		
		transectionDetailModel withdrowdata = (transectionDetailModel)this.transcationdetailrepo.save(ss);
		return withdrowdata;
	}

	public transectionDetailModel credit(transectionDetailModel ss) {
		// TODO Auto-generated method stub
        List<AccountModel> list = (List<AccountModel>)this.accountrepository.findAll();
		
		list=list.stream().map(b->{
			if(b.getId()==ss.getAccountid()) {
					b.setAccountbalance(b.getAccountbalance()+ss.getAmount());
					ss.setStatus("successfull");
			        System.out.println(b);
			        this.accountrepository.save(b);
			}
			return b;
		}).collect(Collectors.toList());
		
		transectionDetailModel withdrowdata = (transectionDetailModel)this.transcationdetailrepo.save(ss);
		return withdrowdata;
	}

	public List<transectionDetailModel> getalltranscation() {
		// TODO Auto-generated method stub
		List<transectionDetailModel> ss = (List<transectionDetailModel>)this.transcationdetailrepo.findAll();
		return ss;
	}

}
