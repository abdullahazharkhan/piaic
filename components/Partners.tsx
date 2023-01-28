"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Image,
  Link,
} from "@chakra-ui/react";
import { motion as m } from "framer-motion";
export default function Objective() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
        <Heading textAlign={"center"} mb={10}>
          Our Strategic{" "}
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
            Partners
          </Text>{" "}
        </Heading>
        <Flex justify={"space-around"} align="center" m={30}>
          <m.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://www.panacloud.ai/">
              <Image
                src="https://www.piaic.org/static/media/panacloudLogo.9b5ef574.svg"
                w={150}
              />
            </Link>
          </m.div>
          <m.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://www.saylaniwelfare.com/en">
              <Image
                src="https://www.piaic.org/static/media/saylaniLogo.c2a52d0a.png"
                w={250}
              />
            </Link>
          </m.div>
        </Flex>
      </Stack>
    </Box>
  );
}
