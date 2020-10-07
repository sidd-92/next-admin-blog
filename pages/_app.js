import App from "next/app";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// Styles
import "../src/assets/main.css";
import "../src/assets/custom.css";
class MyApp extends App {
  render() {
    const { Component, pageProps, store, router } = this.props;
    return (
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    );
  }
}

export default MyApp;
