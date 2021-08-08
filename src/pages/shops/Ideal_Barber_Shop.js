import React from 'react';

const Ideal_Barber_Shop = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\ideal_barber_shop.png" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Ideal Barber Shop</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
            Our state of the art ecommerce store was built exclusively to cater to our professional customers. Our site gives you a wonderful and real life shopping experience with high resolution images, customer oriented shopping cart, and easy checkout process. Call us for any questions and our guys at the store are glad to answer you questions. With our extensive knowledge base in the barber supply industry, we will guide you to the best choice of products that will suit your barber supply needs. 813-605-0177.  shipping to US states and US Territories. check store policy and FAQ page for shipping details.
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://idealbarbersupply.com/aboutus/", "_blank")}>
                <span style={{color:"#1049a3"}}>
                  Check out their website
                </span>
                </td>
            </div>
          </p>
          
        </div>
    </div>
  );
};

export default Ideal_Barber_Shop;