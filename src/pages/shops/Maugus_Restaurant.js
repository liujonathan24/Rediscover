import React from 'react';

const Maugus_Restaurant = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\Maugus_Restaurant.jpg" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Maugus Restaurant</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
            Family owned and operated by the Papakonstantinou family since 1982. The Maugus Restaurant has been an staple in the town of Wellesley since the early 1900s. Maugus was officially established in 1937 and remains one of the last family owned restaurants in Wellesley. The Maugus offers home made soups (Chicken Noodle, Greek Egg Lemon, Lentil and Blackeye Bean), as well as home made muffins (Blueberry, Bran and Corn). Greek specials include home made Greek yogurt, Spinach Pie, Pastitsio, Mousaka, stuffed Grape Leaves and Baked Lamb.

Maugus was purchased by the Papakonstantinou family who immigrated from Greece in 1969. Over the last 29 years, the Maugus restaurant has evolved from a small dinner to a 110 seat restaurant which features private functions. Maugus has a unique menu that features breakfast all day with an american, greek combination. Maugus has received numerous awards including being featured on Phantom Gourmet, Chronicle (back street & back roads) along with many continuing newspaper awards.
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

export default Maugus_Restaurant;