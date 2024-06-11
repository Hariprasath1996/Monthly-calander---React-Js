import { useState } from "react";
import { GiFastBackwardButton } from "react-icons/gi";
import { GiFastForwardButton } from "react-icons/gi";


const App = () => {
  const WeaDays =["Sun","Mon","Tue","Wed" ,"Thu","Fri" ,"Sat" ]
  const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
const [selectedDate,setSelectedDate]=useState(new Date());
  const daysInMonth=()=>{
    const daysArray=[];

    const firstDay= new Date (selectedDate.getFullYear(),selectedDate.getMonth(),1);
    const lastDay= new Date (selectedDate.getFullYear(),selectedDate.getMonth()+1,0);
    return daysArray ;

  }
  daysInMonth()
  return (<>
    <div className="calender">
      <div className="header">
        <button>
        <GiFastBackwardButton />
        </button>
        <select value={selectedDate.getMonth()} >
          {months.map((month,index)=>(
            <option key={index} value={index}>{month}
            </option>                           
          ))}
        </select>
        <select >
        </select>
        <button>
        <GiFastForwardButton />
        </button>
      </div>
      <div className="Day-list">
        {WeaDays.map((day)=>(
          <div className="Days" key={day}> {day} </div>
        ))}
      </div>
    </div>

  </>
);
}

export default App;