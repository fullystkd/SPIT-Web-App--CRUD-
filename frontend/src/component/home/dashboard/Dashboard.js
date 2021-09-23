import React, {useEffect, useState} from 'react';
import axios from 'axios';

function DashBoard(props) {


    // let [stock, setStockInfo] = useState({ symbol: ""})

    let [stock, setStockInfo] = useState({ symbol: "" , companyName: "", price: "", change: "", bid: "",  ask: ""})

    let [stockInput, setStockSymbol] = useState({ symbol: "" })

    // const [pageReload, setPageReload] = useState(1)

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const tempStockSymbol = {...stockInput};
        if (tempStockSymbol[name] != null) {
            tempStockSymbol[name] = value;
        }
        setStockSymbol(tempStockSymbol)
    }

    const searchStockSubmitHandler = () => {
        const params = {
            symbol: stockInput.symbol
        }
        console.log(params);
        axios.get('http://localhost:8080/searchStock', {params}).then(response => {
            console.log(response)
            setStockInfo(response.data)
            // setPageReload(count => count + 1)
            }).catch(error => {
                console.log("in the future add logic to navigate to an error page")});
    }

    return (
        <div>
            <div class="col-md-6 sym-seach">
                <label for="inputStockSymbol" className="form-label"><h4>Stock Quick Search</h4></label>
                <input name="symbol"  placeholder="Stock Symbol" value={stockInput.symbol} onChange={changeHandler} type="text" class="form-control" id="inputSymbol" />
                <button className="bg-light btn btn-outline-success spacing" type="button" onClick={searchStockSubmitHandler}>Search Stock</button>
            </div>
            <div className="col dash-output">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <p className="card-text">Symbol: {stock.symbol}</p>
                            <p className="card-text">Company: {stock.companyName}</p>
                            <p className="card-text">Price: {stock.price}</p>
                            <p className="card-text">Day Change: {stock.change}</p>
                            <p className="card-text">Bid: {stock.bid}</p>
                            <p className="card-text">Ask: {stock.ask}</p>
                            <div className="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
    );
}

export default DashBoard;