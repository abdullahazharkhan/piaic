"use client";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Box>
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png"
        }
        alt={"PIAIC"}
        height={50}
        width={50}
      />
    </Box>
  );
}

export default Logo;
