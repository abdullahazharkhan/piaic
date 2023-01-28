"use client";
import React from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  Text,
  HStack,
  VStack,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion as m } from "framer-motion";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbAugmentedReality } from "react-icons/tb";
import { IoMdPlanet } from "react-icons/io";
import { IconType } from "react-icons";

const milestones = [
  {
    id: 1,
    categories: ["Quarter I", "(Core)"],
    title: "Object-Oriented Programming using TypeScript",
    icon: SiTypescript,
    description: `We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. `,
    date: "Duration: 13 Weeks",
  },
  {
    id: 2,
    categories: ["Quarter II", "(Core)"],
    title:
      "Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    icon: TbBrandNextjs,
    description: `The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).`,
    date: "Duration: 13 Weeks",
  },
  {
    id: 3,
    categories: ["Quarter III", "(Core)"],
    title:
      "Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    icon: AiOutlineDollarCircle,
    description: `You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. `,
    date: "Duration: 13 Weeks",
  },
  {
    id: 4,
    categories: ["Quarter IV", "(Specialization)"],
    title: "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    icon: IoMdPlanet,
    description: `In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.`,
    date: "Duration: 13 Weeks",
  },
  {
    id: 5,
    categories: ["Quarter V", "(Specialization)"],
    title:
      "Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
    icon: TbAugmentedReality,
    description: `The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.`,
    date: "Duration: 13 Weeks",
  },
];

const Milestones = () => {
  return (
    <Container maxWidth="4xl" p={{ base: 2, sm: 10 }}>
      {milestones.map((milestone, index) => (
        <Flex key={index} mb="10px">
          <LineWithDot />
          <Card {...milestone} />
        </Flex>
      ))}
    </Container>
  );
};

interface CardProps {
  title: string;
  categories: string[];
  description: string;
  icon: IconType;
  date: string;
}

const Card = ({ title, categories, description, icon, date }: CardProps) => {
  return (
    <m.div
      whileHover={{ scale: 0.98 }}
      whileInView={{ x: 0 }}
      initial={{ x: -100 }}
    >
      <HStack
        p={{ base: 3, sm: 6 }}
        bg={useColorModeValue("gray.100", "gray.800")}
        spacing={5}
        rounded="lg"
        alignItems="center"
        pos="relative"
        _before={{
          content: `""`,
          w: "0",
          h: "0",
          borderColor: `transparent ${useColorModeValue(
            "#edf2f6",
            "#1a202c"
          )} transparent`,
          borderStyle: "solid",
          borderWidth: "15px 15px 15px 0",
          position: "absolute",
          left: "-15px",
          display: "block",
        }}
      >
        <Icon as={icon} w={12} h={12} color="brand.limegreen" />
        <Box>
          <HStack spacing={2} mb={1}>
            {categories.map((cat) => (
              <Text fontSize="sm" color={"brand.seafoam"} key={cat}>
                {cat}
              </Text>
            ))}
          </HStack>
          <VStack spacing={2} mb={3} textAlign="left">
            <chakra.h1
              as={Link}
              _hover={{ color: "brand.limegreen", textDecoration: "none" }}
              fontSize="2xl"
              lineHeight={1.2}
              fontWeight="bold"
              w="100%"
            >
              {title}
            </chakra.h1>
            <Text fontSize="md" color={"gray.500"}>
              {description}
            </Text>
          </VStack>
          <Text fontSize="sm" color={"brand.seafoam"}>
            {date}
          </Text>
        </Box>
      </HStack>
    </m.div>
  );
};

const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px">
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("brand.spearmint", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius="100px"
          border="3px solid #94C973"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

export default Milestones;
