import {useState,useEffect} from "react";
import Icon from "./icon";
import Svg from "./Svg";
import themes from "./themes.json";

export default function App() {
  var [theme, setTheme] = useState(themes[0]);

  function handleTheme(type) {
    // find the theme in themes variable
    var filtered = themes.filter(function (item) {
      return item.type === type;
    });
    // get ready to set current theme
    var object = {};

    // get the actual existing theme
    if (filtered.length >= 1) {
      object = filtered[0];
    } else {
      object = themes[0];
    }
    // do stuff on this website
    // ...

    // save the setting
    setTheme(object);
    // localStorage.setItem("theme", object.type)
  }

  // get viewer's setting once this website load
  useEffect(function () {
    handleTheme(/*localStorage.getItem("theme")*/);
  }, []);

  return (
    <div className={"sm:p-12 min-h-screen " + theme.plate}>
      <div 
        className="mx-auto mb-4 flex flex-wrap gap-2 justify-center rounded-md border p-4"
        style={{ maxWidth: "640px" }}
      >
        <div className="text-center">
          <Icon />
        </div>
        <div className="grow text-right">
          <h1 className="mb-2 text-3xl font-medium xl:text-4xl">Theme Universe</h1>
          <a 
            className={"inline-block rounded-md border px-3 py-1.5 " + theme.button} 
            href="https://zummon.page/" 
            target="_blank"
          >
            Made by zummon
          </a>
        </div>
      </div>
      <div 
        className={"mx-auto " + theme.svgcolor}
        style={{ maxWidth: "768px" }}
      >
        <Svg className="h-auto max-w-full" />
      </div>
      <div 
        className={"rounded-md p-4 mx-auto " + theme.card}
        style={{ maxWidth: "640px" }}
      >
        <div className="flex flex-wrap gap-2">
          <div className="grow">
            <h1 className="mb-2 text-3xl font-medium xl:text-4xl">How does it work?</h1>
            <h4 className="text-lg font-medium xl:text-xl">Select one of the options to see</h4>
          </div>
          <div className="">
            <select
              className="rounded-md text-black text-lg"
              size={themes.length}
              value={theme.type}
              onChange={function (event) {
                handleTheme(event.currentTarget.value);
              }}
            >
              {themes.map(function (item) {
                return (
                  <option key={item.type} value={item.type}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus tempora possimus ullam tenetur atque temporibus,
          praesentium pariatur quibusdam sunt voluptate quaerat repellat,
          suscipit cum assumenda ea reiciendis accusantium debitis
          expedita!
        </p>
      </div>
    </div>
  );
}
