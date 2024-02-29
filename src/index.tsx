import { Detail, List } from "@raycast/api";
import { motion } from "framer-motion";
import './style.css';
import React from "react";

export default function Main() {
  return (
    <>
      <Detail markdown="# Meditation" />
      <Meter />
    </>
  );
}

function Meter() {
  const meterStyle = {
    borderStyle: "solid",
    borderWidth: "20%",
    borderColor: "black",
    borderRadius: "5%"
  };

  return (
    <div style={meterStyle}>
      
    </div>
  );
}
