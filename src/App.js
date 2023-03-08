import "./App.css";
import React,{ useState } from "react";
import Navbar from "./components/Navbar";
import Productlist from "./components/Productlist.js";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem.js";


function App() {
  let products = [
    { price: 9999, name: "Iphone 14", quantity: 0},
    {price: 999,name: "Google Pixel 7",quantity:0}]


  let [productlist, setProductList] = useState(products);
  let [totalamount,settotalamount] = useState(0);


   const incrementQuantity =(index) => {
    let newProductList = [...productlist];
    let newtotalamount=totalamount;
    newtotalamount+=newProductList[index].price;
    settotalamount(newtotalamount);
    newProductList[index].quantity++;
    setProductList(newProductList); }

   const decrementQuantity =(index) => {
    let newProductList = [...productlist];
    let newtotalamount=totalamount;
    if (newProductList[index].quantity > 0 ){
      newProductList[index].quantity--;
      newtotalamount-= newProductList[index].price;
      settotalamount(newtotalamount);}
    setProductList(newProductList); }

  const resetbutton= ()=> { 
    let newProductList=[...productlist];
       
    // eslint-disable-next-line
    newProductList.map((products)=>{
      products.quantity =  0 })
      setProductList(newProductList)
      settotalamount(0)
  }

  const removeItem=(index) =>{
    let newProductList=[...productlist];
    let newtotalamount=totalamount;
    newtotalamount-=newProductList[index].quantity*newProductList[index].price;
     newProductList.splice(index ,1);
     setProductList(newProductList);
     settotalamount(newtotalamount);

  }

  const addItem=(name,price) =>{
    let newProductList=[...productlist];
    newProductList.push({
      
     price :price,
      name: name,
      quantity:0,

    });
  
  setProductList(newProductList);
  };




 

  
    return (
      <div className="App">
        <Navbar />
        <main className="container mt-5">
          <AddItem addItem={addItem} />
          <Productlist
            productlist={productlist}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            removeItem={removeItem}
          />
        </main>

        <Footer 
        totalamount={totalamount}
        resetbutton={resetbutton}/>
      </div>
    );
  }


export default App;
