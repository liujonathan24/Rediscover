import React from 'react';

const Middlesex_Savings_Bank = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\Middlesex_Savings_Bank.jpg" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Middlesex Savings Bank</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
           From the very beginning, we’ve been right there with you.
When Middlesex Institution for Savings was founded in 1835 in Concord, MA, banks were focused on businesses rather than families. But our founders saw a need to support the community and created a mutual bank where everyone was welcome to save and help build a better life.

Today, Middlesex Savings Bank is one of the largest mutually owned savings banks in the country. Unlike many other banks, we don’t have shareholders to answer to, or stock prices to worry about. So we can always put our customers first with better rates, more personalized service, and continuous support of the communities we all call home.
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://www.middlesexbank.com/", "_blank")}>
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

export default Middlesex_Savings_Bank;