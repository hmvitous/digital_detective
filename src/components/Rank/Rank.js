import React from "react";

const Rank = () => {
  return (
    <div>
      <div className="white f3">
        {`${name} , your current rank is...`}
      </div>
      <div className="white f5">
        {entries}
      </div>
    </div>
  );
};

export default Rank;
