import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import StatusChecker from "./StatusChecker";

export default function Header({ title }) {
  
  return (
    <>
      <header>
        <Navigation />
        {/* <StatusChecker /> */}
      </header>
    </>
  )
}
