import React from 'react';

const Loyal_Companion = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\Loyal_Companion.jpg" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Loyal Companion</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
           Loyal Companion is unlike any pet experience in the world. We’re a community of experts from nutritionists to groomers to behaviorists dedicated to holistic pet wellness. Here, you’ll find everything you need under one virtual and physical roof. Natural food. Healthy treats. Supplies. Grooming. Daycare. Training. Vet services. Advice. And a comprehensive loyalty program like no other that rewards you for every way you take care of your pet.

We’re obsessed with nutrition and have 1,400 employees with an estimated 1 million hours* (and counting) of food training to prove it. We’ve curated the best products and our Pet Foodies have read up on every ingredient, studied every label, and yes, even tasted the food from time to time - all to help you find the best diet that fits the unique needs of your pet.

At Loyal Companion, we’ve created a place where you can learn, have fun, be part of a community and get exactly what you need. Including peace of mind.

Stop by and say hello. Because if not, someday soon one of those cats will figure out how to type and then you WILL get a judgy letter.
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://loyalcompanion.com/pages/about-us", "_blank")}>
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

export default Loyal_Companion;