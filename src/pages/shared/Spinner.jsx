import { Button } from "@mui/material";
import React from "react";

const Spinner = ({ children }) => {
  return (
    <>
      <Button
        disabled
        loading
        variant="contained"
        class="btn btn-primary mt-4 w-full"
        sx={{ textTransform: "capitalize" }}
      >
        {children}
      </Button>
    </>
  );
};

export default Spinner;
