import React from "react";
import MapView from "../components/MapView";
import RouteInput from "../components/RouteInput";
import RiskLegend from "../components/RiskLegend";

function Home() {
  return (
    <div>
      <h1>Women Safety Route Predictor 🚺</h1>

      <RouteInput />

      <MapView />

      <RiskLegend />
    </div>
  );
}

export default Home;