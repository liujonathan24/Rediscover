import React from 'react';

const Universal_Pediatric_Association = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\Universal_Pediatric_Association.jpg" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Universal Pediatric Association</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
            niversal Pediatric Associates pediatricians have been working in Newton, Wellesley and other Metro-west Boston areas for many years and have built a thriving practice that really goes the extra mile for families. Whether it's your child's routine yearly check and you have a few extra questions or a phone call at two in the morning for medical advice about a sick child, we will always have time answer your questions.

We are located in the heart of metro-west just a mile away from Newton-Wellesley Hospital right off Route 16 in Wellesley Hills, on the Newton border. We have free parking and the building is handicap accessible.

Our office is warm and inviting and you are always greeted with a smiling face that you trust because we have a small dedicated staff that really gets to know the families.
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://universal-pediatrics.com/", "_blank")}>
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

export default Universal_Pediatric_Association;