import React from 'react';

const Holy_Spirit_Catholic_Community = () => {
  return (
    <div>
        <div>
          <img style={{ paddingTop:"1vh", paddingLeft:"29vw", paddingRight:"29vw", width:"fit-content"}} src="..\..\holy_spirit_catholic_community.jpg" alt="Capezio"></img>
        </div>
        <div>
          <h1 className={"text-6xl font-semibold text-center"}>Holy Spirit Catholic Community</h1>
          <p className="bg-white flex flex-col justify-center items-center" 
            style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}
            > 
            We are an emerging group of Spirit-filled people seeking to make the rich tradition and spirituality of the Catholic heritage of our birth, available and accessible to ALL people of ALL faiths.

We are a people of God growing in spirit through a vibrant liturgy, rich in tradition, and through education as well. We are dedicated to furthering love, compassion, justice and peace in our local world and beyond. We seek to be open, welcoming, inclusive, prayerful, awakening, life affirming, grace-filled, sacramental, collaborative, empowering, spiritual, a priestly people of God, celebrating individual gifts, committed to social justice, and rooted in the teachings of Jesus. We are founded on two of the great pillars of his teaching: Everyone is welcome and included; and service to the community and the poor. We tithe ten percent of all donations to a charity.

We affirm the ordination of both men and women and their choice of celibacy or marriage. We accept and celebrate with respect, and love, the dignity of all human beings regardless of their race, national origin, gender, sexual orientation or marital status. We fully support the divorced and remarried, family planning and inclusiveness of ALL God?s people in the celebration of the sacraments. We extend affirmation and hospitality to all. We will elect leaders who are accountable to the community and who practice attentive listening to the faith experience of each member. We wish to create a safe place for all to speak the truth about their experience, thereby promoting the healing and empowerment of us all. We desire to call each person, lay and ordained, to wholeness, to individual spirituality, to full participation and active faith sharing in community, to participation in ministry and to the formation of conscience. We seek to attract others of like mind, heart and spirit and to associate with groups with similar views and goals. As a result, we have elected to join the Ecumenical Catholic Communion. We will pursue dialogue with all faiths and traditions, as we believe God is active and discernable in all people, and loves everyone unconditionally and equally.

Together we build the community we believe God calls us to create.

If you are looking for a spiritual home with the expressed values
within these web pages - WELCOME HOME. Our hearts and arms are open
to you and we invite you to come and grow with us!

Peace and Blessings,
Members of Holy Spirit Catholic Community
            <div style={{borderWidth:"3px", borderColor:"#1049a3", color:"#1049a3", padding:".25vw"}}>
              <td onClick={()=> window.open("https://www.holyspiritboston.org/", "_blank")}>
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

export default Holy_Spirit_Catholic_Community;