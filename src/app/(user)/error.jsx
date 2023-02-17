"use client";

import { useEffect } from "react";
import Button from "../../components/Button";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h1>Something went wrong!</h1>
      <Button title="reset" variant="primary" onClick={() => reset()} />
    </div>
  );
};

export default Error;
