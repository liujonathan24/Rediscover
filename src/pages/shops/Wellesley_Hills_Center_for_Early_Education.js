import React from 'react';

const Wellesley_Hills_Center_for_Early_Education = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\Wellesley_Hills_Center_for_Early_Education.jfif" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Wellesley Hills Center for Early Education</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
             At Wellesley Hills Center for Early Education in Wellesley, we focus on each child as both an individual and as a member of a class and larger school community. Through positive communication and modeling, we create a comfortable environment in which children are valued and responded to with respect and attention.  We strive to help children develop a positive sense of self and the ability to share their feelings, thoughts and ideas confidently with others. The close connections that the children establish with their teachers and classmates help foster a sense of self-esteem and a willingness to explore, participate and create.
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://www.wellesleyhillscenter.com/home.html", "_blank")}>
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

export default Wellesley_Hills_Center_for_Early_Education;