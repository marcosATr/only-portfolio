import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      body: {
        backgroundColor: "#131313",
        overflow: "auto",
      },
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
  shadows: {
    outline: "none",
  },
});
