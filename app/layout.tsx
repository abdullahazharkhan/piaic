"use client";
import "./globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = extendTheme({
    colors: {
      brand: {
        seafoam: "#2F5233",
        limegreen: "#76B947",
        kelly: "#B1D8B7",
        spearmint: "#94C973",
      },
    },
  });
  return (
    <html lang="en">
      <head />
      <AnimatePresence mode="wait">
        <motion.div
          transition={{
            delay: 1,
          }}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
        >
          <ChakraProvider theme={theme}>
            <body>
              <Navbar />
              {children}
              <Footer />
            </body>
          </ChakraProvider>
        </motion.div>
      </AnimatePresence>
    </html>
  );
}
