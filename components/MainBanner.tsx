import {
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion as m } from "framer-motion";
export default function MainBanner() {
  return (
    <Stack
      minH={"60vh"}
      direction={{ base: "column", md: "row" }}
      pl={{ sm: 0, lg: "150px" }}
    >
      <Flex justify="center">
        <Image
          alt={"main img"}
          scale={{ base: "0.5", md: "1" }}
          objectFit={"cover"}
          src={"https://www.piaic.org/static/media/president-png.5b5f05c1.png"}
        />
      </Flex>
      <Flex
        align={"center"}
        pl={{ base: "30px", md: "30px", lg: "70px" }}
        pr={{ base: "30px" }}
      >
        <Stack spacing={6} w={"full"} maxW={"xl"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "10%", md: "20%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "brand.limegreen",
                zIndex: -1,
              }}
            >
              Presidential Initiative
            </Text>
            <br />{" "}
            <m.div
              transition={{
                delay: 0.75,
              }}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
            >
              <Text
                fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}
                color={"brand.seafoam"}
                as={"span"}
                fontWeight="thin"
              >
                for Artificial Intelligence & Computing
              </Text>{" "}
            </m.div>
          </Heading>
          <Text
            fontSize={{ base: "sm", lg: "md" }}
            color={"gray.500"}
            textAlign="justify"
          >
            The mission of PIAIC is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            augmented reality, and internet of things.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Link
              href="https://portal.piaic.org/signup"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Button
                rounded={"full"}
                color={"white"}
                bg="brand.seafoam"
                _hover={{ color: "brand.seafoam", bg: "brand.kelly" }}
              >
                Apply Now
              </Button>
            </Link>
            <Link
              href="https://www.piaic.org/howitworks"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Button
                rounded={"full"}
                variant="ghost"
                color={"brand.seafoam"}
                _hover={{ bg: "brand.kelly" }}
              >
                How It Works
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
