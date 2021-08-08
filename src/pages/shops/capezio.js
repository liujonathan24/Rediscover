import React from 'react';

const Capezio = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\capezio.jpg" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Capezio</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
            Capezio Dance Shop is a privately owned dance store and official authorized reseller of 
            Capezio, Bloch, So Danca, Motionwear, and many other name brands. Serving dancers in the 
            San Fernando Valley since 1973.Capezio specializes in ballet slippers and toe shoes, as 
            well as costume shoes for jazz and modern dance and theatrical performances. Capezio also 
            makes specialized footwear for circus performers and gymnasts. Along with shoes, the company 
            produces dance and athletic clothing such as tights, leotards, and warm-up outfits.
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://www.capezio.com/", "_blank")}>
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

export default Capezio;