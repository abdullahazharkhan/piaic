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
// Here we have used react-icons package for the icons
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { ImCloud } from "react-icons/im";
import { SiKubernetes } from "react-icons/si";
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
    title: "Certified Kubernetes Application Developer (CKAD)",
    icon: SiKubernetes,
    description: `Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.`,
    date: "Duration: 13 Weeks",
  },
  {
    id: 5,
    categories: ["Quarter V", "(Specialization)"],
    title: "Developing Multi-Cloud Apps using CDK for Terraform",
    icon: ImCloud,
    description: `Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.`,
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
