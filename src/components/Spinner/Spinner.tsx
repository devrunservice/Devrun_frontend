import React from "react";
import { BeatLoader } from "react-spinners";
import * as St from "./styles";

const Spinner = () => (
  <St.Section>
    <p>Loading...</p>
    <BeatLoader color="#5F4B8B" />
  </St.Section>
);

export default Spinner;
