package com.spit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.spit.entity.Member;
import com.spit.repository.MemberRepository;

@CrossOrigin
@RestController
public class MemberController {
	
	@Autowired
	MemberRepository memberRepository;
	
	@RequestMapping(value="/save",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
	public void submitMemberDetails(@RequestBody Member member) {
		memberRepository.save(member);
	}

	
	@RequestMapping(value="/findMemberById",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET
			)
	@ResponseBody
	private ResponseEntity<Member> findMemberById(Integer id){
		Member member = memberRepository.findMemberById(id);
		return new ResponseEntity<Member>(member, HttpStatus.OK);
	}
	
	@RequestMapping(value="/findMemberByEmail",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET
		)
	@ResponseBody
	private ResponseEntity<Member> findMemberByEmail(String email){
		Member member = memberRepository.findMemberByEmail(email);
		return new ResponseEntity<Member>(member, HttpStatus.OK);
	}
	
	@RequestMapping(value="/login",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
	public ResponseEntity<Member> login(@RequestBody Member member) {
		
		Member result = memberRepository.login(member.getEmail(), member.getPassword());
		if (result == null) {
			return new ResponseEntity<Member>(HttpStatus.UNAUTHORIZED);
		} else {
			return new ResponseEntity<Member>(result, HttpStatus.OK);
		}
		
	}
	
	@RequestMapping(value="/memberlist",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.GET
			)
	public List<Member> listAllMembers() {
		return memberRepository.findAll();
	}

}
