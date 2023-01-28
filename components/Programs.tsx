"use client";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import React from "react";
function Programs() {
  return (
    <Box pt={"90px"} id="programs">
      <Flex justify={"center"}>
        <Heading textAlign={"center"}>
          Available{" "}
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
              bg: "brand.limegreen",
              zIndex: -1,
            }}
          >
            Programs
          </Text>
        </Heading>
      </Flex>
      <Text textAlign={"center"} color="gray.500" m={5}>
        After completing the first two quarters the participants will select one
        or more specializations consisting of two courses each
      </Text>
      <Flex justify={"space-evenly"}>
        <Box>
          <m.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Flex direction={{ base: "column", md: "row", lg: "row" }}>
              <Center py={12} m={2} cursor="pointer">
                <Box
                  role={"group"}
                  p={6}
                  maxW={"330px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.800")}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      backgroundImage: `url('https://blog.liquid.com/hubfs/What%20is%20Metaverse_211018-01.png')`,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(60px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      src={
                        "https://blog.liquid.com/hubfs/What%20is%20Metaverse_211018-01.png"
                      }
                    />
                  </Box>
                  <Stack pt={10} align={"center"}>
                    <Text
                      color={"gray.500"}
                      fontSize={"sm"}
                      textTransform={"uppercase"}
                    >
                      Course
                    </Text>
                    <Heading
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                      textAlign={"center"}
                    >
                      Web 3.0 and Metaverse Specialization
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                      <Text
                        fontWeight={"thin"}
                        color={"gray.500"}
                        fontSize={"sm"}
                      >
                        <Link href="/meta">LEARN MORE</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Center>
              <Center py={12} m={2} cursor="pointer">
                <Box
                  role={"group"}
                  p={6}
                  maxW={"330px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.800")}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      backgroundImage: `url("https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-07/future-artificial-intelligence.png")`,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(60px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      src={
                        "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-07/future-artificial-intelligence.png"
                      }
                    />
                  </Box>
                  <Stack pt={10} align={"center"}>
                    <Text
                      color={"gray.500"}
                      fontSize={"sm"}
                      textTransform={"uppercase"}
                    >
                      Course
                    </Text>
                    <Heading
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                      textAlign={"center"}
                    >
                      Artificial Intelligence (AI) Specialization
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                      <Text
                        fontWeight={"thin"}
                        color={"gray.500"}
                        fontSize={"sm"}
                      >
                        <Link href="/ai">LEARN MORE</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Center>
              <Center py={12} m={2} cursor="pointer">
                <Box
                  role={"group"}
                  p={6}
                  maxW={"330px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.800")}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      backgroundImage: `url("https://res.infoq.com/articles/cloud-native-architecture/en/headerimage/croppted-P_tyg8_o-1605320572194.jpeg")`,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(60px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      src={
                        "https://platform9.com/wp-content/uploads/2019/12/cloud-native-challenges.png"
                      }
                    />
                  </Box>
                  <Stack pt={10} align={"center"}>
                    <Text
                      color={"gray.500"}
                      fontSize={"sm"}
                      textTransform={"uppercase"}
                    >
                      Course
                    </Text>
                    <Heading
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                      textAlign={"center"}
                    >
                      Cloud-Native Computing Specialization
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                      <Text
                        fontWeight={"thin"}
                        color={"gray.500"}
                        fontSize={"sm"}
                      >
                        <Link href="/cnc">LEARN MORE</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Center>
            </Flex>
          </m.div>
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Flex
              direction={{ base: "column", md: "row", lg: "row" }}
              maxW={"8xl"}
            >
              <Center py={12} m={2} cursor="pointer">
                <Box
                  role={"group"}
                  p={6}
                  maxW={"330px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.800")}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      backgroundImage: `url("https://imageio.forbes.com/specials-images/imageserve/632dbbaa69b953ca837d2c1f/Network-and-data-connection/0x0.jpg?format=jpg&crop=5700,3206,x0,y0,safe&width=960")`,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(60px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      src={
                        "https://imageio.forbes.com/specials-images/imageserve/632dbbaa69b953ca837d2c1f/Network-and-data-connection/0x0.jpg?format=jpg&crop=5700,3206,x0,y0,safe&width=960"
                      }
                    />
                  </Box>
                  <Stack pt={10} align={"center"}>
                    <Text
                      color={"gray.500"}
                      fontSize={"sm"}
                      textTransform={"uppercase"}
                    >
                      Course
                    </Text>
                    <Heading
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                      textAlign={"center"}
                    >
                      Ambient Computing and IoT Specialization
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                      <Text
                        fontWeight={"thin"}
                        color={"gray.500"}
                        fontSize={"sm"}
                      >
                        <Link href="/iot">LEARN MORE</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Center>
              <Center py={12} m={2} cursor="pointer">
                <Box
                  role={"group"}
                  p={6}
                  maxW={"330px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.800")}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      backgroundImage: `url("https://genomicsengland.imgix.net/images/Technology/Bioinformatics-and-data-hands.jpg?auto=format%2Ccompress&fit=max&q=80&w=1200&s=950955ef2fb07d99e2411d5f1078cc2f")`,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(60px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      src={
                        "https://genomicsengland.imgix.net/images/Technology/Bioinformatics-and-data-hands.jpg?auto=format%2Ccompress&fit=max&q=80&w=1200&s=950955ef2fb07d99e2411d5f1078cc2f"
                      }
                    />
                  </Box>
                  <Stack pt={10} align={"center"}>
                    <Text
                      color={"gray.500"}
                      fontSize={"sm"}
                      textTransform={"uppercase"}
                    >
                      course
                    </Text>
                    <Heading
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                      textAlign={"center"}
                    >
                      Genomics and Bioinformatics
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                      <Text
                        fontWeight={"thin"}
                        color={"gray.500"}
                        fontSize={"sm"}
                      >
                        <Link href="/bioinformatics">LEARN MORE</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Center>
              <Center py={12} m={2} cursor="pointer">
                <Box
                  role={"group"}
                  p={6}
                  maxW={"330px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.800")}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      backgroundImage: `url("https://www.tail-f.com/wordpress/wp-content/uploads/2021/07/transaction-blog-feature-image-e1626927706942.jpg")`,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(60px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      src={
                        "https://www.tail-f.com/wordpress/wp-content/uploads/2021/07/transaction-blog-feature-image-e1626927706942.jpg"
                      }
                    />
                  </Box>
                  <Stack pt={10} align={"center"}>
                    <Text
                      color={"gray.500"}
                      fontSize={"sm"}
                      textTransform={"uppercase"}
                    >
                      course
                    </Text>
                    <Heading
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                      textAlign={"center"}
                    >
                      Network and Automation Specialization
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                      <Text
                        fontWeight={"thin"}
                        color={"gray.500"}
                        fontSize={"sm"}
                      >
                        <Link href="/network">LEARN MORE</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Center>
            </Flex>
          </m.div>
        </Box>
      </Flex>
    </Box>
  );
}

export default Programs;
