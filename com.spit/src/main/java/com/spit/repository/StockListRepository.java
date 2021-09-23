package com.spit.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.spit.entity.StockList;

public interface StockListRepository extends JpaRepository<StockList, Integer> {

	@Query("SELECT S FROM StockList S WHERE S.member.email = ?1")
	List<StockList> findStockListByMemberId(String email);
	
	@Query("DELETE FROM StockList S WHERE S.id=?1")
	@Modifying
	@Transactional
	void deleteStockListById(Integer id);
	
}
