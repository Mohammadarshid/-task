import React from "react";
import Layout from "../Components/Layout";
import { Box, Typography, Button } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 20,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "3rem",
          },
          "& p ": {
            textAlign: "justify",
          },
        }}
      >
        <Typography varient="h4">
          welcome to Royal sed ur
          <p>
            The old restaurant was accessible through the Jaleb Chowk, a
            prominent ceremonial opening to the palace precinct through its
            eastern flank. The Chowk and the main seating of the old restaurant
            were connected by the admin office’s courtyard through a narrow
            opening beside the toilet block, which opened into the courtyard.
            This was used as an opportunity to connect the Palace to a different
            side of the walled city by opening up the courtyard as a connector
            to Jaleb Chowk. The project was undertaken by Studio Lotus as an
            exercise in exploring whether it is more important to recreate a
            version of what was or reveal what lay beneath the layers of paint
            to expose the historic shell and juxtapose that with contemporary
            expressions for traditional material and artisanal skills.
          </p>
        </Typography>

        <p> Freash Ingredient , tasty Meals</p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint
        </p>

        <Button>View Item</Button>
      </Box>
    </Layout>
  );
};

export default About;
