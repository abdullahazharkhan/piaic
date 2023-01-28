"use client";
import {
  chakra,
  Stack,
  useColorModeValue,
  Container,
  Link,
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import {motion as m} from "framer-motion"
const Index = () => {
  return (
    <Container maxW="6xl" p="6">
      <Banner />
    </Container>
  );
};

const Banner = () => {
  return (
    <Stack
      mb={30}
      mt={30}
      direction={{ base: "column", md: "row" }}
      spacing={5}
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      rounded="lg"
      boxShadow="md"
      bg={useColorModeValue("gray.100", "gray.700")}
      p={{ base: 8, md: 16 }}
    >
      <Box>
        <Heading>
          You Want{" "}
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
            In?
          </Text>
        </Heading>
        <m.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <chakra.h2
            fontSize="2xl"
            lineHeight={1.2}
            fontWeight="bold"
            bgGradient="linear(to-l, brand.limegreen,brand.spearmint)"
            bgClip="text"
          >
            Then Apply Now For The Course
          </chakra.h2>
        </m.div>
      </Box>
      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={{ base: 0, sm: 3 }}
        w={{ base: "100%", sm: "auto" }}
      >
        <Button
          as={Link}
          href="https://portal.piaic.org/signup"
          variant="solid"
          color="white"
          bg="brand.seafoam"
          px={"20px"}
          _hover={{
            color: "brand.seafoam",
            bg: "brand.kelly",
            textDecoration: "none",
          }}
          size="lg"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          lineHeight={1}
        >
          Apply
        </Button>
      </Stack>
    </Stack>
  );
};

export default Index;
