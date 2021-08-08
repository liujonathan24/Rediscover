import React from 'react';

const Quebrada_Baking_Company = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\Quebrada_Baking_Company.jpg" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Quebrada Baking Company</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
            We are a family-run neighborhood bakery with an unrelenting dedication to our product, our team, and our communities.

Everything is baked in house, starting in the early hours of the morning to ensure freshness.  We use the highest quality ingredients and are committed to sourcing locally. We strive to bring the freshest, simplest and most wholesome Ingredients in every decadent bite.

Quebrada (said as “Kay-bra-da”) is a Spanish geographical term used throughout Central and South America to denote a break in terrain.
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("Quebrada_Baking_Company", "_blank")}>
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

export default Quebrada_Baking_Company;