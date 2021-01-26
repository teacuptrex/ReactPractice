// 1. Import counter component
import Counter from "./components/Counter";
import Quotes from "./components/Quotes";
import Switch from "./components/Switch";
import Votes from "./components/Votes";
import Weather from "./components/Weather";
import RunColorPicker from "./components/color-picker/Color";
import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [weatherList, setWeatherList] = useState([]);

  // run code only once when the component first loads
  useEffect(() => {
    fetch("https://api.weather.gov/gridpoints/DTX/65,33/forecast") //fetch isd built into modern browsers
      .then((res) => res.json()) //convert from json
      .then((data) => {
        //set the state with the data we need
        setWeatherList(data.properties.periods);
      });
  }, []); //[] is list of dependencies.  if empty, indicates the api run only once.

  /*const [weatherList, setWeatherList] = useState([
    { time: "Today", highF: 60, lowF: 50, conditions: "Mostly Cloudy" },
    { time: "Tomorrow", highF: 65, lowF: 53, conditions: "Partly Sunny" },
    { time: "Tuesday", highF: 66, lowF: 51, conditions: "Partly Sunny" }
  ]); */

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotesList(data);
      });
  }, []);

  const [quotesList, setQuotesList] = useState([]);
  /*{
      author: "Nelson Mandela",
      text: "It always seems impossible until it’s done.",
      date: "2001"
    },
    {
      author: "Yoda",
      text: "Do. Or do not. There is no try.",
      date: "A long time ago"
    },
    { author: "Bugs Bunny", text: "What's up, doc?" }*/

  return (
    <div className="App">
      <RunColorPicker />
      {weatherList.length === 0
        ? "Loading..."
        : weatherList.map((wx) => (
            <Weather
              key={wx.number} //some unique id
              time={wx.name}
              tempF={wx.temperature}
              conditions={wx.shortForecast}
            />
          ))}

      {/* <Weather time="Today" conditions="Overcast" tempF={28} />
      <Weather time="Tomorrow" conditions="Sunny" tempF={78} /> */}
      {/*<Quotes
        author="Nelson Mandela"
        q="It always seems impossible until it's done."
        date="2001"
      />
      <Quotes
        author="Yoda"
        q="Do. Or do not. There is no try."
        date="A long long time ago"
      />
      <Quotes author="Bugs Bunny" q="What's up, doc?" />
      
      {quotesList.map((qx) => (
        <Quotes key={qx.index} author={qx.author} q={qx.text} date={qx.date} />
      ))}
      */}
      <Switch />
      <Switch />
      <Counter />
      <Votes />
    </div>
  );
}
