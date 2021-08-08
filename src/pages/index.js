import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images  = [
  {
    url: "https://eastern-re.com/wp-content/uploads/2019/10/300-810-Linden-Sq-Entry-MCF-0705.jpg",
  },
  {
    url: "https://patch.com/img/cdn20/users/1625498/20180907/040757/styles/raw/public/processed_images/wellesley_police_department_-_dan_libon-1536350865-4844.jpg",
  },
  {
    url: "https://media.linx-usa.com/files/camp/LINX_DanaHallCampus.JPG",
  },
  {
    url: "https://spearstreetcapital.com/wp-content/uploads/2016/08/wellesley-exterior-3-1600x1066.jpg",
  },
  {
    url: "https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fimg.gtsstatic.net%2Freno%2Fimagereader.aspx%3Fimageurl%3Dhttps%253A%252F%252Fsir.azureedge.net%252F1103i215%252F4czz5x9swpfv45ygx1y7qgy2d3i215%26option%3DN%26permitphotoenlargement%3Dfalse&option=N&permitphotoenlargement=false&w=1200",
  },

];

const Home = () => {
  return (
    <div>
      <div className="w-3/4 max-w-3xl mx-auto my-8 text-center">
        <h1 className={"text-5xl font-bold mb-2"}>Rediscover Wellesley</h1>
        <p className={"mb-2"}>See your town for what it is.</p>
      </div>
      <div style={{paddingLeft:"20vw", paddingRight:"20vw", paddingTop:"2vh", paddingBottom:"2vh"}}>
        <SimpleImageSlider
              width={1200}
              height={800}
              slideDuration={0.05}
              images={images}
              showNavs={true}
              showBullets={true}
            />
      </div>
    </div>
  );
};

export default Home;
