import React, { useEffect } from "react";
import { useState } from "react";
import './Chart.scss'
const data = require("../../data.json");
export const Chart = () => {
const [totalWeek,setTotalWeek] = useState(0);
let sumTotalWeek = ()=>{
  let tw=0;
  for(let i=0; i<data.length; i++){
    tw += data[i].amount
  }
  setTotalWeek(tw);
}
useEffect(
  ()=>sumTotalWeek(),[]
)
  return (
    <>
      <div className="chart-container">
        <div className="chart-title">Spending - Last 7 days</div>
        <div className="bar-chart">
          {data.map((day) =>
            <div className="day-expense" key={day.day}>
              <span className="tooltiptext">$ {day.amount}</span>
              <div className="day-expense-bar" style={{height:day.amount*2.7}}></div>
              <div className="week-day">{day.day}</div>
            </div>
          )}
        </div>
        <div className="total">
          <div>Total this month</div>
          <div className="total-data">
            <div className="total-amount">$478.33</div>
            <div className="total-variation"><div className="total-var-percent">+2.4% </div>
            <div className="total-var-text"> from last month</div></div>
          </div>
        </div>
      </div>
    </>
  );
};
