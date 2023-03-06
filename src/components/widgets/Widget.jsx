import React from 'react'
import './widget.scss'
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export const Widget = ({type}) => {
  let data;
  //temporary
  // let amount1="44,278";
  // let amount2="67,987";
  // let amount3="$76,965";
  // let amount4="$59,765";


  

  

  switch (type) {
    case "user":
      data = {
        title: "Total Users",
        isMoney: false,
        des: "Last Week",
        icon:<LeaderboardIcon className='icon' style={{color: "blue" }}/>,
        iconL:( <ArrowCircleUpOutlinedIcon style={{color: "blue" }}/>),
        per:5,
        amount:"44,278"
      };
      break;
    case "profit":
      data = {
        title: "Total Profit",
        isMoney: false,
        des: "Last 6 Days",
        icon:<LeaderboardIcon className='icon' style={{color: "green" }}/>,
        iconL:( <ArrowCircleUpOutlinedIcon style={{color: "green" }}/>),
        per:0.9,
        amount:"$76,965"
      };
      break;
    case "expense":
      data = {
        title: "Total Expenses",
        isMoney: true,
        des: "Last 9 Days",
        icon:<ShowChartIcon className='icon' style={{color: "purple" }}/>,
        iconL:( <ArrowCircleUpOutlinedIcon style={{color: "purple" }}/>),
        
        per:0.75,
        amount:"67,987"
       
      };
      break;
    case "cost":
      data = {
        title: "Total Cost",
        isMoney: true,
        des: "Last Year",
        icon:<ShowChartIcon className='icon' style={{color: "orange" }}/>,
        iconL:( <ArrowCircleUpOutlinedIcon style={{color: "orange" }}/>),
        per:0.6,
        amount:"$59,765"
       
      };
      break;
    default:
      break;
  }



  return (
    
    //for widgets
    <div className='widget'>

{/* //left part of the widget cart */}
        <div className="left"><b>
        <span className='title'>{data.title}</span>
        <br></br>
        {/* <span className='counter'><b>44,278</b></span> */}
        <span className='counter'><b>{data.isMoney}{data.amount}</b></span>
        <br></br>
        <span className='percentage'>&nbsp;&nbsp;
          {data.iconL}{data.per}% &nbsp; &nbsp;<span style={{color:"black"}}> {data.des}</span></span>
        </b>
        </div>


{/* //right part of the widget cart */}
        <div className="right">
        {data.icon}
        </div>
    </div>
   
  )
}
