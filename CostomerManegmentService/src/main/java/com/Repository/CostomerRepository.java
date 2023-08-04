package com.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Model.CostomerModel;


public interface CostomerRepository extends JpaRepository<CostomerModel,Integer>{

	
	@Query("SELECT P FROM CostomerModel P WHERE P.id=:id")
	CostomerModel finddById(@Param("id") int id);

	

	
}
