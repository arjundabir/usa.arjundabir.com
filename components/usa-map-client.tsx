"use client";

import { StateAbbreviations, USAMap } from "@mirawision/usa-map-react";
import { useMemo, useState } from "react";
import styles from "@/components/usa-map-client.module.css";
import { createClient } from "@/utils/supabase/client";

export default function USAMapClient({ states }: { states?: string[] }) {
  const supabase = createClient();
  const [selectedStates, setSelectedStates] = useState<string[]>(states || []);

  const mapSettings = useMemo(() => {
    const settings: Record<string, any> = {};

    StateAbbreviations.forEach((state) => {
      settings[state] = {
        fill: selectedStates.includes(state) ? "#000" : undefined,
        stroke: selectedStates.includes(state) ? "#fff" : undefined,
        onClick: async () => {
          const isSelected = selectedStates.includes(state);
          const newStates = isSelected
            ? selectedStates.filter((s) => s !== state)
            : [...selectedStates, state];
          try {
            const { error } = await supabase
              .from("states")
              .update({ states: newStates })
              .eq("id", 1);
            if (error) {
              console.error("Supabase update error:", error);
              return;
            }
            setSelectedStates(newStates);
          } catch (err) {
            console.error("Error updating state:", err);
          }
        },
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
      }}
      customStates={mapSettings}
    />
  );
}
