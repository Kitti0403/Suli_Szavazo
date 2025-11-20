import React from "react";

const PollCard = ({ poll }) => {
  return (
    <div
      className="flex justify-between items-center
    p-3 m-2 gap-5 bg-slate-700 rounded-xl"
    >
      <ul className="text-xl p-4">{poll.question}</ul>

      <ul className="p-3 m-1 w-1/2 bg-blue-900 rounded-xl ">
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
