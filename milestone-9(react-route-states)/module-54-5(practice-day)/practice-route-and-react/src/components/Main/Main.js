import React, { useEffect, useState } from "react";
import Teams from "../Teams/Teams";

const Main = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  console.log(teams[1]);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {teams.map((team) => (
          <Teams key={team.id} team={team}></Teams>
        ))}
      </div>
    </div>
  );
};

export default Main;
