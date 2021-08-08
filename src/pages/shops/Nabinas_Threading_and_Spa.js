import React from 'react';

const Nabinas_Threading_and_Spa = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\Nabinas_Threading_and_Spa.jpg" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Nabinas Threading and Spa</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
           Welcome to Nabina's Threading and Spa owned and operated by Nabina Gurung. Nabina is certified by the Massachussets Board of Cosme tology and graduated from Neel David's Academy in Kathmandu, Nepal. Before coming to the U.S., Nabina tutored at the New International Training Center in Kathamndu and has over 15 years experience in beauty Threading and spa treatments in both Nepal and the USA.


All our stylists are certified licensed professionals who regularly take courses in the latest trends committed to providing outstanding individual service. Entering our Threading will feel like coming home again.


At Nabina's Threading and Spa, we offer high-quality services for everyone in the family at affordable prices. We believe that no matter your age, you can look and feel stylish.
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("http://nabinasalon.com/threading/", "_blank")}>
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

export default Nabinas_Threading_and_Spa;