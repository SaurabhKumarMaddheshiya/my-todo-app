import React from 'react';

var currDate = new Date();
currDate = currDate.getHours();
var greeting = "";
var greetingStyle = {};
if (currDate >= 1 && currDate <= 11) {
  greeting = "Good Morning";
  greetingStyle.color = "green";
} else if (currDate >= 12 && currDate <
 17) {
  greeting = "Good Afternoon";
  greetingStyle.color = "orange";
}else if (currDate >= 17 && currDate <=
 19) {
  greeting = "Good Evening";
  greetingStyle.color = "yellow";
}
 else {
  greeting = "Good Night";
  greetingStyle.color = "brown";
}
const Greetings = () => {
    return (
    <div className="container">
      <h5>
        Hello, <span style={greetingStyle}>{greeting}</span>
      </h5>
    </div>
    );
}

export default Greetings;
