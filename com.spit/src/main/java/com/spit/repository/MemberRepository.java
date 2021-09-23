package com.spit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.spit.entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

	
	@Query("SELECT M FROM Member M WHERE M.email = ?1 and M.password = ?2")
	
	Member login(String email, String password);
	
	@Query("SELECT M FROM Member M WHERE M.id = ?1")
	
	Member findMemberById(Integer id);
	
	@Query("SELECT M FROM Member M WHERE M.email = ?1")
	
	Member findMemberByEmail(String email);

}
