package com.Services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Model.CostomerModel;

import com.Repository.CostomerRepository;

@Service
public class CostomerService {
	
	@Autowired
	private CostomerRepository costomerRepository;
	
	private int a;
	
	public CostomerModel addCostomer(CostomerModel ss) {
		CostomerModel aa;
		try {
			aa = (CostomerModel)this.costomerRepository.save(ss);
			
		} catch (Exception e) {
			// TODO: handle exception
			throw new ArithmeticException("Bad Credeisial !!;");
		}
		return aa;
	}
	
	public List<CostomerModel> allCostomer(){
		List<CostomerModel> aa;
		try {
			 aa = (List<CostomerModel>)this.costomerRepository.findAll();
			
		} catch (Exception e) {
			// TODO: handle exception
			throw new ArithmeticException("Bad Credeisial !!;");
		}
		return aa;
	}
	
	public CostomerModel singleCostomer(int id) {
		//CostomerModel aa;
		 
		 Optional<CostomerModel> customerdata = costomerRepository.findById(id);
		if(customerdata.isPresent()) {
			return customerdata.get();
			 //aa = (CostomerModel)this.costomerRepository.finddById(id);
		} else {
			// TODO: handle exception
			throw new ArithmeticException("Error | User Not Found !");
		}
		
		//return aa;
	}
	
	public String update(CostomerModel ss,int id) {
		try {
			
			
			List<CostomerModel> list = (List<CostomerModel>) this.costomerRepository.findAll();
			 a=0;
			list=list.stream().map(b->{
				
				if(b.getId()==id) {
					b.setFirstname(ss.getFirstname());
					b.setEmail(ss.getEmail());
					b.setLastname(ss.getLastname());
					b.setPassword(ss.getPassword());
					System.out.println(b);
					this.costomerRepository.save(b);
					this.a=1;
				}
				return b;
			}).collect(Collectors.toList());
			if(a==0) {
				throw new ArithmeticException("Error | User Not Found !");
			}
			return "update successfully";
		} catch (Exception e) {
			// TODO: handle exception
			throw new ArithmeticException("Error | User Not Found !");
		}
		
		
	
	}

	public String deletcostomer(int id) {
		// TODO Auto-generated method stub
		try {
			this.costomerRepository.deleteById(id);
			return "delete successfully";
		} catch (Exception e) {
			throw new ArithmeticException("Error | User Not Found !");
		}
		
		
	}
	
	

}
