import React from 'react';

const Nails_Studio = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\Nails_Studio.jfif" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Nails Studio</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
            Our Team Priority:
Helping each and everyone of our customers feel and be their best through self-care

Our Idea:
Self-care is well deserve in the most cleanse way with a touch of colors

Our Goal:
To be the most trendy way to express our creativity and confidence in customers. And our team members to connect with each other as family as a team to make beauty a reality. 
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://nailsstudio.net/", "_blank")}>
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

export default Nails_Studio;