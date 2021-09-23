import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import StockList from './../stocklist/StockList';

function Stocks(props) {

    const history = useHistory();

    const [stocks, setStocks] = useState([])

    const [pageReload, setPageReload] = useState(1)
    
    let [stock, setStockSymbol] = useState({symbol: "", member: {email: localStorage.getItem("loggedInMember")}})

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const tempStockSymbol = {...stock};
        if (tempStockSymbol[name] != null) {
            tempStockSymbol[name] = value;
        }
        setStockSymbol(tempStockSymbol)
    }

    const addStockSubmitHandler = () => {
        axios.post('http://localhost:8080/saveStock', stock).then(response => {
            setPageReload(count => count + 1)
           }).catch(error => {
                console.log("in the future add logic to navigate to an error page")});
    }

    useEffect(() => {
        const params = {
            email: localStorage.getItem("loggedInMember")
        }
        axios.get('http://localhost:8080/findStockByMemberId', {params})
        .then(response => {
            setStocks(response.data);
        }).catch(error => {

        });
        }, [pageReload]
    );

    const addToStockListHandler = (symbol, id) => {
        const stockList = {symbol, member: {id: id}};
        axios.post('http://localhost:8080/addStockToStockList', stockList).then(response => {
           
           }).catch(error => {
                console.log("in the future add logic to navigate to an error page")});
    }

    const deleteStockSubmitHandler = (stockId) => {
        const params = {
            id: stockId
        }
        console.log("output 1: ", params);
        axios.get('http://localhost:8080/deleteStockById', {params})
        .then(response => {
            setPageReload(count => count + 1)
           }).catch(error => {
                console.log("in the future add logic to navigate to an error page")});
    }

    return (
        <div>
            <div class="col-md-6 sym-seach">
                <label for="inputStockSymbol" className="form-label"><h4>Stock Symbol</h4></label>
                <input name="symbol" value={stock.symbol} onChange={changeHandler} type="text" class="form-control" id="inputSymbol" />
                <button className="bg-light btn btn-outline-success spacing" type="button" onClick={addStockSubmitHandler}>Add Stock</button>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {stocks.map((stock, index) => {
                    return(
                        <div className="col output">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <p className="card-text">Symbol: {stock.symbol}</p>
                                    <p className="card-text">Company: {stock.companyName}</p>
                                    <p className="card-text">Price: {stock.price}</p>
                                    <p className="card-text">Day Change: {stock.change}</p>
                                    <p className="card-text">Bid: {stock.bid}</p>
                                    <p className="card-text">Ask: {stock.ask}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-primary"onClick={() => addToStockListHandler(stock.symbol, stock.member.id)}>Add to StockList</button>
                                            <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => deleteStockSubmitHandler(stock.id)}>Delete</button>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                )})}
            </div>  
        </div>
    );
}

export default Stocks;