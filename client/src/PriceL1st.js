import React,{Component} from 'react'
class PriceL1st extends Component {
  //maps all data on to the page
    render(){
        const mapped=this.props.allelements.map((ele)=>
        {
            return (
                <div>
                <p> Product ID:{ele.productID}</p>
                <p>Price: ${ele.price}</p>
                    <p>Quantity: {ele.quantity}</p>
                    <hr/>

                </div>
            )
        });
        return(
            <div>
                {mapped}
            </div>
        )
    }
}



export default PriceL1st;