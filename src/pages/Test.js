import React, { useEffect } from "react";

export default function Test() {
  const cb = (example) => {
    console.log(example);
  };

  useEffect(async () => {
    // const data = await fetch(
    //   "https://switch.seekda.com/switch/latest/json/ratesAverage.json?skd-property-code=S004006&token=42"
    // );
    // console.log(data);

    const data = await fetch(
      `https://switch.seekda.com/switch/latest/json/ratesAverage.json?skd-property-code=S004006&token=42&callback=chirag`,
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    );
    const temp = await data.text();
    // const chirag = (e) => console.log("eval", e);
    eval(temp);
    // console.log(data);

    // const res = await fetch("http://localhost:8000/test/cb", {
    //   method: "get",
    //   headers: { "Content-Type": "application/json" },
    // });
    // const result = await res.json();
    // console.log(result);
  }, []);

  return <div>Test</div>;
}

