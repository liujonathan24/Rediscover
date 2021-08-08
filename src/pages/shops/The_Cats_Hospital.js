import React from 'react';

const The_Cats_Hospital = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\The_Cats_Hospital.jpg" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>The Cat's Hospital</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
            Welcome to The Cat's Hospital, LLC

At The Cat's Hospital, LLC, we will do everything possible to offer the very best in veterinary care to strengthen the bond that you have with your cat starting when they are a kitten and continuing into their old age.      
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://www.thecatshospital.com/", "_blank")}>
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

export default The_Cats_Hospital;