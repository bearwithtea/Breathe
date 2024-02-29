import { Detail } from "@raycast/api";
import { motion } from "framer-motion";
import './style.css';
import React from "react";

export default function Main() {
  return (
    <>
      <Detail markdown="# Meditation" />
      <Box />
    </>
  );
}

class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}

