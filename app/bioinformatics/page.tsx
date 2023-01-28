"use client";
import { motion as m } from "framer-motion";
import * as React from "react";
import { chakra, Stack, Text, Box, Flex, Heading } from "@chakra-ui/react";
import DetailedBio from "@/components/DetailedBio";

const Meta = () => {
  return (
    <Box>
      <Flex p={{ base: 8, sm: 14 }} minH="83vh" justify={"center"}>
        <Stack direction="column" spacing={6} alignItems="center" pt="120px">
          <m.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1.05 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <chakra.h1
              fontSize={{ base: "4xl", sm: "5xl" }}
              fontWeight="bold"
              textAlign="center"
              maxW="800px"
            >
              <chakra.span bg="linear-gradient(transparent 80%, #94C973 80%)">
                Genomics and Bioinformatics
              </chakra.span>{" "}
              <br />
              Specialization
            </chakra.h1>
          </m.div>
          <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">
            A ONE AND A QUARTER YEAR DEV PROGRAM FOR ABSOLUTE BEGINNERS. GETTING
            PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF
            BIOINFORMATICS.
          </Text>
        </Stack>
      </Flex>
      <Box>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Detailed{" "}
          <chakra.span bg="linear-gradient(transparent 80%, #94C973 80%)">
            Program
          </chakra.span>{" "}
          Structure
        </Heading>
        <chakra.h5 fontSize="xl" fontWeight="Thin" mb={18} textAlign="center">
          Note That First Three Quarters are Common to Every Program and are
          Compulsory.
        </chakra.h5>
        <DetailedBio />
      </Box>
    </Box>
  );
};

export default Meta;
