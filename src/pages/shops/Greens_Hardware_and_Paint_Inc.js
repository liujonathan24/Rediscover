import React from 'react';

const Greens_Hardware_and_Paint_Inc = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\greens_hardware_and_paint_inc.jpg" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Greens Hardware and Paint Inc</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
            While the big box impersonal home improvement warehouses are dotting the landscape, Green's Hardware is the place to shop for top quality merchandise and the friendly, knowledgeable service you'll find only in a classic hardware store.

We stock the brands you know and trust. At Green's Hardware our goal is to provide you with excellent, friendly service at reasonable, competitive prices. We have it all from bits to nuts. Our helpful staff will assist you with locating any item in stock or to give advice for your current projects.

Tom Green founded Green's Hardware in 2005, on the same site where his parents operated Green's Stationery for 40 years. Tom had a vision to serve the town of Wellesley and surrounding area with an independent hardware store that offers both old-fashioned service and convenience with an inventory that reflects the needs of the homeowners and contractors of today. Tom has built a business that gives him the opportunity to welcome his customers and serve them with pride. It's a family tradition we're proud to continue.

We appreciate your business and welcome your comments and suggestions.

Please stop in and visit us soon.

Tom Green Owner
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://www.greenshardware.com/", "_blank")}>
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

export default Greens_Hardware_and_Paint_Inc;