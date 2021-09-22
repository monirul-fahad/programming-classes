import "./App.css";

function App() {
  const nayoks = [
    "Rubel",
    "Bapparaz",
    "Sakib Khan",
    "Bappi",
    "Shuvo",
    "Joshim",
  ];
  const nayikas = ["Moushumi", "Rina Khan", "Opu Bishash"];

  const cinemas = [
    { movie: "Beder meye josna", nayok: "koober", nayika: "kopila" },
    { movie: "Goriver bou", nayok: "Rubel", nayika: "Moushumi" },
    { movie: "Shamir shongshar", nayok: "Razzak", nayika: "Shabana" },
    { movie: "Protishod", nayok: "Joshim", nayika: "Didhi" },
  ];

  return (
    <div className="App">
      <ul>
        {nayoks.map((nayok) => (
          <li>{nayok}</li>
        ))}
      </ul>
      {/* <Cinema
        movie="Mission Impossible"
        nayok="James Bond"
        nayika="Angelina Jully"
      ></Cinema> */}
      {cinemas.map((cinema) => (
        <Cinema
          movie={cinema.movie}
          nayok={cinema.nayok}
          nayika={cinema.nayika}
        ></Cinema>
      ))}
    </div>
  );
}
/* 
<Friend name="Rakib" phone="01812508643" address="Noakhali"></Friend>
<Friend name="Niloy" phone="01879564213" address="Companigonj"></Friend>
<Friend name="Sagor" phone="01975641235" address="Borishal"></Friend> 

<Preson name="Ruble" nayika="Moushumi"></Preson>
<Preson name="Bapparaz" nayika="Cheka khawoa"></Preson>
<Preson name="Sakib Khan" nayika="Opu Bishwash"></Preson>
<Preson></Preson>
*/

/* 
<Preson name={nayoks[0]} nayika={nayikas[0]}></Preson>
<Preson name={nayoks[1]} nayika={nayikas[1]}></Preson>
<Preson name={nayoks[2]} nayika={nayikas[2]}></Preson>
<Preson></Preson> 
*/

function Preson(props) {
  return (
    <div className="person">
      <h1>Name: {props.name}</h1>
      <h4>Hero of: {props.nayika}</h4>
    </div>
  );
}

function Cinema(props) {
  return (
    <div className="person">
      <h2>Cinema: {props.movie}</h2>
      <h4>Nayok: {props.nayok}</h4>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  );
}

function Friend(props) {
  return (
    <div className="person">
      <h2>Name: {props.name} </h2>
      <h3>Phone: {props.phone} </h3>
      <h3>Address: {props.address} </h3>
    </div>
  );
}

export default App;
