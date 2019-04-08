import React,{Component} from 'react'
class newProduct extends Component
{
    sendData=(e)=> {  //when form is submitted it fetches information on the page
        console.log('yes');
        e.preventDefault();
        fetch('/product/create',
            {
                method: 'POST',   //looks for a post request
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({   //grabs data from body and makes it a string
                    productID: e.target.productID.value,
                    price: e.target.price.value,
                    quantity:e.target.quantity.value,
                }),
            }
        );
    };

        render()
        {  //form for user to add a new product
            return (
                <div>
                    <h1> New Product Form</h1>
                    <form onSubmit={this.sendData}>
                        <label htmlFor="productID">Product ID:</label>
                        <input type="text" id="productID" name="productID"/>
                        <p></p>

                        <label htmlFor="price">Product Price:</label>
                        <input type="text" id="price" name="price"/>
                        <p></p>


                        <label htmlFor="quantity">Product Quantity:</label>
                        <input type="text" id="quantity" name="quantity"/>
                        <p></p>

                        <button>Submit</button>
                    </form>
                </div>
            );
        }

    }
export default newProduct;