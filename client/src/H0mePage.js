import React,{Component} from 'react'
import PriceL1st from "./PriceL1st";
import newProduct from './newProduct'
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

class H0mePage extends Component{
    constructor(props)
    {
        super(props);
        this.state={arr4y:[]};
        this.grabData()
    }

    grabData()
    {
        fetch('/product')
            .then(filterdata=>
            {
                return filterdata.json();
            })

            .then(jData=>this.setState({arr4y:jData}))
    }

    render() {
        return(
            <div>
                <Router>
                    <Link to="/add">Add Product</Link>
                <PriceL1st allelements={this.state.arr4y}/>

                <Route path='/add' component={newProduct}/>
                </Router>
            </div>

        )
    }
}



export default H0mePage