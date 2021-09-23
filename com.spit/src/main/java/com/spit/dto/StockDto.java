package com.spit.dto;

import java.math.BigDecimal;

import org.springframework.stereotype.Service;

@Service
public class StockDto {
	
	private String symbol;
	private String name;
	private BigDecimal price;
	private BigDecimal change;
	private BigDecimal bid;
	private BigDecimal ask;
	
	public StockDto() {
		super();
	}

	public StockDto(String symbol, String name, BigDecimal price, BigDecimal change, BigDecimal bid, BigDecimal ask) {
		this.symbol = symbol;
		this.name = name;
		this.price = price;
		this.change = change;
		this.bid = bid;
		this.ask = ask;
		
		System.out.println("symbol=" + symbol + ", name=" + name + ", price=" + price + ", change=" + change + ", bid=" + bid + ", ask=" + ask);
		
	}

	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public BigDecimal getChange() {
		return change;
	}

	public void setChange(BigDecimal change) {
		this.change = change;
	}

	public BigDecimal getBid() {
		return bid;
	}

	public void setBid(BigDecimal bid) {
		this.bid = bid;
	}

	public BigDecimal getAsk() {
		return ask;
	}

	public void setAsk(BigDecimal ask) {
		this.ask = ask;
	}
}
