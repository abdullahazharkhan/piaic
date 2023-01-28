"use client";
import { ReactNode } from "react";

import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png"
        width={100}
      />
    </Link>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      mt={30}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={5}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Flex justify={"center"}>
              <Logo />
            </Flex>
            <Text fontSize={"sm"} textAlign="center">
              Made with ❤ by <br />
              <Link href="https://github.com/abdullahazharkhan">
                Abdullah Azhar Khan
              </Link>
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Courses</ListHeader>
            <Link href={"/meta"}>Web3 and Metaverse</Link>
            <Link href={"/ai"}>Artificial Intelligence</Link>
            <Link href={"/bioinformatics"}>Bioinformatics</Link>
            <Link href={"/cnc"}>Cloud Native</Link>
            <Link href={"/iot"}>Internet of Things</Link>
            <Link href={"/network"}>Networking</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"/about"}>About</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"https://www.piaic.org/"}>Admission</Link>
            <Link href={"https://panaverse-dao-syllabus.vercel.app/"}>
              Panaverse DAO
            </Link>
            <Link href={"https://twitter.com/Panaverse_edu"}>Twitter</Link>
            <Link href={"https://github.com/panaverse"}>GitHub</Link>
            <Link href={"https://www.youtube.com/@panaverse/streams"}>
              YouTube
            </Link>
            <Link href={"https://www.facebook.com/groups/panaverse"}>
              Facebook
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
