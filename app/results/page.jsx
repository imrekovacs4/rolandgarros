import React from "react";
import AllResults from "./AllResults";
import { results } from "../external";

export default function Page() {
  return (
    <div>
      <AllResults results={results} />
    </div>
  );
}
