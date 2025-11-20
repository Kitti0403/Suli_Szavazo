import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import PollCard from "./components/PollCard";

function App() {
  const [polls, setPolls] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:6969/polls");
    const data = await response.json();

    setPolls(data);
    // log in console
    console.log(data);
  };

  useEffect(() => {
    // Fetch polls from the backend
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getData();
  }, []);

  return (
    <>
      <div className='grid grid-cols-2'>
        {polls.length > 0 ? (
          // ha igaz akkor...
          polls.map((poll) => <PollCard key={poll.id} poll={poll} />)
        ) : (
          <p>Nincs adat</p>
        )}
      </div>
    </>
  );
}

export default App;
