package com.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Model.AccountModel;


public interface AccountRepository extends JpaRepository<AccountModel,Integer>{
	
	@Query("SELECT P FROM AccountModel P WHERE P.id=:id")
	List<AccountModel> finddById(@Param("id") int id);

}
