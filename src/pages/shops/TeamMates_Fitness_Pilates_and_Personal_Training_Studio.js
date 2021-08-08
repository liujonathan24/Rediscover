import React from 'react';

const TeamMates_Fitness_Pilates_and_Personal_Training_Studio = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\TeamMates_Fitness_Pilates_and_Personal_Training_Studio.jpg" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>TeamMates Fitness Pilates and Personal Training Studio</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
            From their years of experience, TeamMates Fitness owners, Leanne and Mike, pride themselves on their expert lineup of certified personal trainers and Pilates instructors. Beyond the expected credentials, their number one priority is to make sure all instructors share their core philosophy to make fitness fun, safe, effective, and a way of life.

What sets us apart from other fitness studios in the area is our comprehensive approach to your health. Each session includes a personalized training program designed for your fitness goals. We provide you with a nutritional guidance, suggesting what to eat and when to eat. And lastly, we help you stay on track when you're not in the gym by promoting healthy lifestyle habits. At Teammates Fitness, we make personal training personal.
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://www.teammatesfitness.com/", "_blank")}>
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

export default TeamMates_Fitness_Pilates_and_Personal_Training_Studio;