"use client";

import { USAMap } from "@mirawision/usa-map-react";

export default function USAMapClient() {
  function handleClick(state: string) {
    console.log(state);
    return;
  }
  return (
    <USAMap
      className="max-w-[500px]"
      defaultState={{
        fill: "#fff",
        stroke: "#000",
        onClick(state) {
          handleClick(state);
        },
      }}
    />
  );
}
