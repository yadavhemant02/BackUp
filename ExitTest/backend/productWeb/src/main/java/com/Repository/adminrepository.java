package com.Repository;

import org.springframework.data.repository.CrudRepository;

import com.Model.adminmodel;

public interface adminrepository extends CrudRepository<adminmodel,Integer>{

	adminmodel findByproductcode(int productcode);
}
