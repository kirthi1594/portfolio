 import React, { useEffect, useState } from "react";
 import { Heading  } from "@chakra-ui/react";
  import GitHubCalendar from "react-github-calendar";
//  import "./GithubCalender.css"
 export default function GithubCalendar() {
  //  const[show,setshow]=useState(false)
  //  useEffect(() => {
  //     setTimeout(() => {
  //      setshow(!show)
  //     }, 5000);
  //  }, [show])
   return (
     <div id="Github">
     {/* <h1>Github Stats -(kirthi1594)</h1> */}
     <Heading
        
        textDecoration="underline"
        marginTop={{ base: "50px", md: "100px" }}
        letterSpacing="1px"
        marginBottom="40px"
        _hover="blueviolet"
        textAlign="center"
      >
        Github Stats 
      </Heading>
     
     <br/>
     
      {/* //  show?   */}
       <div className="Monthly-stats" >
       <h3 className="month" style={{textAlign:"center"}}> Monthly Stats</h3><br/>
         <GitHubCalendar style={{width:'100%',maxWidth:'800px', margin:'0 auto'}}
           className="react-activity-calendar" 
           color="yellow"
           username="kirthi594"
         />
       </div>
 <div>
   <img  style={{width:'100%',maxWidth:'800px', margin:'0 auto'}}
  //  style={{width:'60vw',marginLeft:'20%'}}
     id="github-top-langs"
     width="100%"
     src="https://github-readme-stats.vercel.app/api/top-langs?username=kirthi1594&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=white&text_color=white"
   />
 </div>
 <div>
   <img  style={{width:'100%',maxWidth:'800px', margin:'0 auto'}}
  //  style={{width:'60vw',marginLeft:'20%'}}
     id="github-stats-card"
     width="100%"
     src="https://github-readme-stats.vercel.app/api?username=kirthi1594&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=white&text_color=white"
   />
 </div>
 <div>
   <img  style={{width:'100%',maxWidth:'800px', margin:'0 auto'}}
  //  style={{width:'60vw',marginLeft:'20%'}}
     id="github-streak-stats"
     width="100%"
     src="https://github-readme-streak-stats.herokuapp.com/?user=kirthi1594&theme=transparent&hide_border=true&title_color=white&text_color=white&sideNums=white&sideLabels=white&ring=white&fire=white&currStreakLabel=white&currStreakNum=white"
     alt=""
   />  </div>  
     
     </div>
   );
 }