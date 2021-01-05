import React from "react";
import ReactDOM from "react-dom";

import generateData from "../test/data";
import Slider from "./slider";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyles} />
      <Box p={4}>
        <Box>
          <Heading
            as="h1"
            color="orange.4"
            fontSize={13}
            my={4}
            fontWeight={1}
            textAlign="center"
          >
            React Id Swiper DEMO
          </Heading>
          <Heading
            my={4}
            textAlign="center"
            color="blue.4"
            as="h3"
            fontWeight={2}
          >
            Please reproduce your issues here!!!!
          </Heading>
        </Box>
        <Box>
          <Slider items={generateData()} />
        </Box>
      </Box>
    </>
  </ThemeProvider>
);