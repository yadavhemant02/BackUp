package com.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Model.costomerModel;
import com.Repository.costomerRepository;

@Service
public class costomerService {
	
	@Autowired
	private costomerRepository repocostomer;
	
	public costomerModel add(costomerModel cm) {
		
		costomerModel ss = (costomerModel)this.repocostomer.save(cm);
		
		return ss;
		
		
		
		
	}
	public List<costomerModel> takedata() {
		//List<costomerModel> list = (List<costomerModel>) this.repocostomer.findByEmailAndPassword(aa);
		List<costomerModel> list = (List<costomerModel>)this.repocostomer.findAll();
		return list;
	}

}
