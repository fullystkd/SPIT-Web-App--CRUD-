import React, {useEffect, useState} from 'react';
import {Card, Table} from 'react-bootstrap';
import axios from 'axios';

function StockList(props) {

    const [stocks, setStocks] = useState([])

    const [pageReload, setPageReload] = useState(1)

    useEffect(() => {
        const params = {
            email: localStorage.getItem("loggedInMember")
        }
        axios.get('http://localhost:8080/findStockListByMemberId', {params})
        .then(response => {

            setStocks(response.data);
        }).catch(error => {

        });
        }, [pageReload]
    );

    const deleteStockSubmitHandler = (stockId) => {
        const params = {
            id: stockId,
        }
        console.log("output 1: ", params);
        axios.get('http://localhost:8080/deleteStockListById', {params})
        .then(response => {
            setPageReload(count => count + 1)
           }).catch(error => {
                console.log("in the future add logic to navigate to an error page")});
    }

    return (
        <div>
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>Stock List</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                            <tr>
                            <th>SYM</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Day Change</th>
                            <th>Bid</th>
                            <th>Ask</th>
                            {/* <th>Annual</th> */}
                            {/* <th>Quaterly</th> */}
                            {/* <th>Yield</th> */}
                            {/* <th>Payout</th> */}
                            {/* <th>Years</th> */}
                            {/* <th>Sector</th> */}
                            {/* <th>Payout Date</th> */}
                            {/* <th>Portfolio Percentage</th> */}
                            </tr>
                        </thead>
                        {stocks.map((stock, index) => {
                            return(
                                <tbody>
                                    <tr align="center">
                                        {/* <td colSpan="612">No Stocks Available.</td> */}
                                        <td colSpan="1">{stock.symbol}</td>
                                        <td colSpan="1">{stock.companyName}</td>
                                        <td colSpan="1">{stock.price}</td>
                                        <td colSpan="1">{stock.change}</td>
                                        <td colSpan="1">{stock.bid}</td>
                                        <td colSpan="1">{stock.ask}</td>
                                        <td>
                                        <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => deleteStockSubmitHandler(stock.id)}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )})}
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
}

export default StockList;