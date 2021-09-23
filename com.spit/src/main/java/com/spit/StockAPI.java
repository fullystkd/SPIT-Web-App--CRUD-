package com.spit;

import java.io.IOException;
import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spit.dto.StockDto;
import com.spit.entity.Member;
import com.spit.repository.MemberRepository;

import yahoofinance.Stock;
import yahoofinance.YahooFinance;

@Service
public class StockAPI {
	
	@Autowired
	MemberRepository memberRepository;
	
	@Autowired
	StockDto stockDto;
	
	public StockDto getStock(String stockName) throws IOException {
		StockDto dto = null;
		Stock stock = YahooFinance.get(stockName);
		dto = new StockDto(stock.getSymbol(), stock.getName(), stock.getQuote().getPrice(),
				stock.getQuote().getChange(), stock.getQuote().getBid(), stock.getQuote().getAsk());
		return dto;
	}
	
//	public StockDto getStockDividend(String stockName) throws IOException {
//		StockDto dto = null;
//		Stock stock = YahooFinance.get(stockName);
//		dto = new StockDto(stock.getSymbol(), stock.getDividend());
//		return dto;
//	}
	
//	public com.spit.entity.Stock addStockDetails(com.spit.entity.Stock stock) throws IOException {
//		
//		String symbol = stock.getSymbol();
//		
//		stockDto = getStock(symbol);
//		
//		String companyName = stockDto.getName();
//		stock.setCompanyName(companyName);
//		BigDecimal price = stockDto.getPrice();
//		stock.setPrice(price);
//		BigDecimal change = stockDto.getChange();
//		stock.setChange(change);
//		BigDecimal bid = stockDto.getBid();
//		stock.setBid(bid);
//		BigDecimal ask = stockDto.getAsk();
//		stock.setAsk(ask);
//		
//		System.out.println("Company Name: " + companyName);
//		System.out.println("Company Name: " + stockDto.getName());
//		
//		return stock;
//	}
}
