package com.spit.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.spit.entity.Stock;

public interface StockRepository extends JpaRepository<Stock, Integer> {
	
//	@Query("SELECT S FROM Stock S WHERE S.email = ?1")
//	
//	Stock findStockBySym(String stock);
	
//	@Query("DELETE FROM stocks S WHERE S.symbol=:symbol")
//	void deleteStock(@Param("symbol") String symbol);
	
	@Query("SELECT S FROM Stock S WHERE S.member.email = ?1")
	List<Stock> findStockByMemberId(String email);
	
	@Query("DELETE FROM Stock S WHERE S.id=?1")
	@Modifying
	@Transactional
	void deleteStockById(Integer id);
}

