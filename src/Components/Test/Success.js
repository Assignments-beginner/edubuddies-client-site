import React from "react";

const Success = () => {
  var array = [
    { id: 1, date: "Mar 12 2012 1:00:00 PM" },
    { id: 1, date: "Mar 12 2012 11:00:00 AM" },
    { id: 1, date: "Mar 12 2012 10:00:00 AM" },
    { id: 2, date: "Mar 8 2012 08:00:00 AM" },
  ];
  array.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });

  console.log(array);
  return (
    <div>
      <h1>Success</h1>
    </div>
  );
};

export default Success;
