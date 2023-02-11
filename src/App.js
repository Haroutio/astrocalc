import {
  Navbar,
  Zodiac,
  Declination,
  Inclination,
  Eccentricity,
  Info,
  Parallax,
  SimpleMeridian,
  ComplexMeridian,
  //Ascendant,
} from "./components/Index";

function App() {
  return (
    <div className="App select-none">
      <div className="m-5">
        <Navbar />
        <Info />
        <div className="my-10 grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-2 gap-10">
          <Zodiac />
          <Declination />
          <Inclination />
          <Eccentricity />
          <Parallax />
          <SimpleMeridian />
          <ComplexMeridian />
          {/*
          <Ascendant />
          */}
        </div>
      </div>
    </div>
  );
}

export default App;
