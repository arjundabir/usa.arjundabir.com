"use client";

import { StateAbbreviations, USAMap } from "@mirawision/usa-map-react";
import { useMemo, useState } from "react";
import styles from "@/components/usa-map-client.module.css";

export default function USAMapClient() {
  const [selectedStates, setSelectedStates] = useState<string[]>([]);

  function handleClick(state: string) {
    console.log(state);
    return;
  }

  const mapSettings = useMemo(() => {
    const settings: Record<string, any> = {};

    StateAbbreviations.forEach((state) => {
      settings[state] = {
        fill: selectedStates.includes(state) ? "#000" : undefined,
        onClick: () =>
          setSelectedStates(
            selectedStates.includes(state)
              ? selectedStates.filter((s) => s !== state)
              : [...selectedStates, state]
          ),
      };
    });

    return settings;
  }, [selectedStates]);

  return (
    <USAMap
      className={`${styles.usaMap} max-w-[500px]`}
      defaultState={{
        fill: "#fff",
        stroke: "#000",
        onClick(state) {
          handleClick(state);
        },
      }}
      customStates={mapSettings}
    />
  );
}
