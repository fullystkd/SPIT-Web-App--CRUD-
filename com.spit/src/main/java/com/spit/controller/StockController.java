package com.spit.controller;

import java.io.IOException;
import java.math.BigDecimal;
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

import com.spit.StockAPI;
import com.spit.dto.StockDto;
import com.spit.entity.Member;
import com.spit.entity.Stock;
import com.spit.entity.StockList;
import com.spit.repository.MemberRepository;
import com.spit.repository.StockListRepository;
import com.spit.repository.StockRepository;

@CrossOrigin
@RestController
public class StockController {
	
	@Autowired
	StockRepository stockRepository;
	
	@Autowired
	StockListRepository stockListRepository;
	
	@Autowired
	MemberRepository memberRepository;
	
	@Autowired
	StockAPI stockAPI;
	
	@Autowired
	StockDto stockDto;
	
	@RequestMapping(value="/searchStock",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.GET
			)
	@ResponseBody
	public ResponseEntity<Stock> searchStockSymbol(String symbol) throws IOException{
		
		Stock stock = new Stock();
	
		stockDto = stockAPI.getStock(symbol);
		
		stock.setSymbol(symbol);
		String companyName = stockDto.getName();
		stock.setCompanyName(companyName);
		BigDecimal price = stockDto.getPrice();
		stock.setPrice(price);
		BigDecimal change = stockDto.getChange();
		stock.setChange(change);
		BigDecimal bid = stockDto.getBid();
		stock.setBid(bid);
		BigDecimal ask = stockDto.getAsk();
		stock.setAsk(ask);	

		return new ResponseEntity<Stock>(stock, HttpStatus.OK);
	}
	
	@RequestMapping(value="/saveStock",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST
			)
	public void submitStockSymbol(@RequestBody Stock stock) throws IOException {
		
		Member member = memberRepository.findMemberByEmail(stock.getMember().getEmail());
		
		stock.setMember(member);
		
//		System.out.println("Symbol 1:" + stock.getSymbol());
		
		String symbol = stock.getSymbol();
		
		stockDto = stockAPI.getStock(symbol);
		
		String companyName = stockDto.getName();
		stock.setCompanyName(companyName);
		BigDecimal price = stockDto.getPrice();
		stock.setPrice(price);
		BigDecimal change = stockDto.getChange();
		stock.setChange(change);
		BigDecimal bid = stockDto.getBid();
		stock.setBid(bid);
		BigDecimal ask = stockDto.getAsk();
		stock.setAsk(ask);
		
		System.out.println("Company Name: " + companyName);
		System.out.println("Company Name: " + stockDto.getName());
				
		stockRepository.save(stock);

	}

	@RequestMapping(value="/findStockByMemberId",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET
			)
	@ResponseBody
	private ResponseEntity<List<Stock>> findStockByMemberId(String email){
		List<Stock> stock = stockRepository.findStockByMemberId(email);
		return new ResponseEntity<List<Stock>>(stock, HttpStatus.OK);
	}
	
	@RequestMapping(value="/findStockListByMemberId",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET
			)
	@ResponseBody
	private ResponseEntity<List<StockList>> findStockListByMemberId(String email){
		List<StockList> stockList = stockListRepository.findStockListByMemberId(email);
		return new ResponseEntity<List<StockList>>(stockList, HttpStatus.OK);
	}
	
	@RequestMapping(value="/stocks",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.GET
			)
	public List<Stock> allStocks() {
		return stockRepository.findAll();
	}
	
	@RequestMapping(value="/stocklist",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.GET
			)
	public List<StockList> listAllStocks() {
		return stockListRepository.findAll();
	}

	@RequestMapping(value="/addStockToStockList",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.POST
			)
	@ResponseBody
	public void addStockToStockList(@RequestBody StockList stockList) throws IOException {
		
		Member member = memberRepository.findMemberById(stockList.getMember().getId());
		
		stockList.setMember(member);
		
		// get the rest of the stock details
		String symbol = stockList.getSymbol();
		
		stockDto = stockAPI.getStock(symbol);
		
		String companyName = stockDto.getName();
		stockList.setCompanyName(companyName);
		BigDecimal price = stockDto.getPrice();
		stockList.setPrice(price);
		BigDecimal change = stockDto.getChange();
		stockList.setChange(change);
		BigDecimal bid = stockDto.getBid();
		stockList.setBid(bid);
		BigDecimal ask = stockDto.getAsk();
		stockList.setAsk(ask);
		
		System.out.println("Company Name: " + companyName);
		System.out.println("Company Name: " + stockDto.getName());
		
		stockListRepository.save(stockList);
	
	}
	
	@RequestMapping(value="/deleteStockById",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET
			)
	@ResponseBody
	private void deleteStockById(Integer id){
		stockRepository.deleteStockById(id);
	}
	
	@RequestMapping(value="/deleteStockListById",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET
			)
	@ResponseBody
	private void deleteStockListById(Integer id){
		stockListRepository.deleteStockListById(id);
	}
}
