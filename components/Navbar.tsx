import {
  useColorModeValue,
  useDisclosure,
  chakra,
  Flex,
  HStack,
  Button,
  Box,
  IconButton,
  VStack,
  CloseButton,
  VisuallyHidden,
  Link,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";
import { motion as m } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const bg = useColorModeValue("RGBA(255, 255, 255, 0.90)", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <Box m={"30px"} position="sticky" top="5" zIndex={100} backdropBlur={200}>
      <chakra.header
        borderRadius={"20px"}
        bg={bg}
        w="full"
        px={{
          base: 3,
          sm: 4,
        }}
        boxShadow="2xl"
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a href="/" title="Home" display="flex" alignItems="center">
              <m.div
                animate={{ rotate: 360 }}
                transition={{ type: "spring", duration: 2, bounce: 0.5 }}
              >
                <Logo />
              </m.div>
              <VisuallyHidden>PIAIC</VisuallyHidden>
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.seafoam"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Link
                href="https://www.piaic.org/howitworks"
                _hover={{ textDecoration: "none" }}
              >
                <Button variant="ghost">How It Works</Button>
              </Link>
              <Link href="/#programs" _hover={{ textDecoration: "none" }}>
                <Button variant="ghost">Available Programs</Button>
              </Link>
              <Link href="/about" _hover={{ textDecoration: "none" }}>
                <Button variant="ghost">About</Button>
              </Link>
              <Link
                href="https://panaverse-dao-syllabus.vercel.app/"
                _hover={{ textDecoration: "none" }}
              >
                <Button variant="ghost">Panaverse DAO</Button>
              </Link>
            </HStack>
            <Link
              _hover={{ textDecoration: "none" }}
              href="https://portal.piaic.org/signup"
            >
              <Button
                color="white"
                bg="brand.seafoam"
                size="sm"
                px={"20px"}
                _hover={{ color: "brand.seafoam", bg: "brand.kelly" }}
              >
                Apply
              </Button>
            </Link>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Link
                  href="https://www.piaic.org/howitworks"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button w={"full"} variant="ghost">
                    How It Works
                  </Button>
                </Link>
                <Link href="#programs" _hover={{ textDecoration: "none" }}>
                  <Button w={"full"} variant="ghost">
                    Available Programs
                  </Button>
                </Link>
                <Link href="/about" _hover={{ textDecoration: "none" }}>
                  <Button w={"full"} variant="ghost">
                    About
                  </Button>
                </Link>
                <Link
                  href="https://panaverse-dao-syllabus.vercel.app/"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button w={"full"} variant="ghost">
                    Panaverse DAO
                  </Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </Box>
  );
};

export default Navbar;
