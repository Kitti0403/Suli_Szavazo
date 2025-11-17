import React from "react";

const PollCard = ({ poll }) => {
  return (
    <div className="flex justify-center items-center
    p-3 m-2 gap-5">
      {poll.question}
      <ul className="p-3 bg-blue-900 rounded-xl">
        {poll.options.map((option) => (
          <li key={option.id}>
            {option.text} - {option.votes} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollCard;
