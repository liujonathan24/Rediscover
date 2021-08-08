import React from 'react';

const Comellas_Restaurants = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\comellas_restaurants.jpg" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Comella's Restaurants</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
            In 1988 I had an idea that Boston and the suburbs needed a family-oriented food retailer. A place where the young and old, families, professionals, laborers, students and most anyone, could buy homemade Italian foods at very affordable prices.
The idea was put to work when the first Comella's opened in Wellesley, MA. The concept was to make fresh pastas, sauces and dinners to be served at your home or at Comella's.

That hasn't changed and years later we still make all our products at each site by hand, using only the highest quality ingredients. Two of my sons, Matt and JP, joined the company upon graduation from college. They continue to look at expanding the company and opening more stores in the near future. The future's still bright as our products and pricing fit the economic conditions of the times more so today than ever before…

The Best for America's Best Customers!
Gene Comella
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://www.comellasrestaurants.com/wellesley-hills", "_blank")}>
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

export default Comellas_Restaurants;