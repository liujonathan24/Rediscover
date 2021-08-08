import React from 'react';

const Singhs_Cafe = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\singhs_cafe.jpg" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Singh's Cafe</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
            
For decades, Punjabi cuisine has been strongly influenced by Mughal invaders, who brought with them the tradition of the great kebabs and shahi foods. This now-transformed Punjabi-style cooking is celebrated as one of the most popular cuisines throughout the world. A strong advocate of staff development within the industry and promoting the highest standards of food, cooking, and service, our head chef, Mr. Harpreet Singh is a member of the Academy of Culinary Arts as well as a Master Chef of Indian Cuisine.

 

Mr. Singh is a third generation chef and combines traditional, authentic recipes with a very special and exotic blend of his own delightful and mouth-watering entrees. An amazing combination of North-Indian Punjabi flavors, Lucknow, and Hyderbadi cuisine intermixed with the rarest of South-Indian flavors. Every ingredient used is fresh.

 

Here at the Singh’s Cafe, all members are devoted in maintaining consistency and diversity. Mr. Singh and his team want to share their passion and love for food with everyone.

We give our No. 1 priority to our customer, so please share with us your experiences, any concern(s), or any questions and we will oblige to serve you the best.
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://www.singhs-cafe.com/", "_blank")}>
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

export default Singhs_Cafe;