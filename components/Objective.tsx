"use client";
import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import { motion as m } from "framer-motion";

export default function Objective() {
  return (
    <m.div
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
          <Heading textAlign={"center"}>
            Getting Ready for the{" "}
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: { base: "10%", md: "20%" },
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "brand.spearmint",
                zIndex: -1,
              }}
            >
              Next Generation
            </Text>{" "}
            of the Internet
          </Heading>
          <Text color={"gray.500"} fontSize={"xl"} textAlign="left">
            The internet is without a doubt the most important technological
            development in human history. Web3, 3D Metaverse, AI, IoT, Cloud,
            and Edge technologies expand the internet as we know it by
            introducing novel features and advancements. Metaverse will make use
            of all aspects of modern technology, including 3D, VR, AR, AI,
            blockchain, cloud and edge computing, voice computing, ambient
            computing, and more. <br /> &nbsp;&nbsp;&nbsp;&nbsp; In this
            brand-new type of curriculum, students will learn how to make money
            and boost exports in the classroom and will begin doing so within
            six months of the program's beginning. It resembles a cross between
            a corporate venture and an educational project.
          </Text>
        </Stack>
      </Box>
    </m.div>
  );
}
