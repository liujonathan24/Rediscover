import React from 'react';

const Coconut_Thai_Cafe = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\coconut_thai_cafe.jfif" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Coconut Thai Cafe</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
            Coconut Thai Cafe offers delicious dining, takeout and delivery to Wellesley, MA.

Coconut Thai Cafe is a cornerstone in the Wellesley community and has been recognized for its outstanding Thai cuisine, excellent service and friendly staff.

Our Thai restaurant is known for its modern interpretation of classic dishes and its insistence on only using high quality fresh ingredients.
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://www.coconutthaicafe.com/menu.aspx?pk_vid=0ea8235c4b3d0c5f1628394166d1ba7c", "_blank")}>
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

export default Coconut_Thai_Cafe;