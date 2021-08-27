import React from "react";
import { useLocation } from "react-router-dom";

export default function LocationDisplay() {
  const location = useLocation();
  return (
    <div data-testid="location-display">
      Location display -{location.pathname}
    </div>
  );
}
