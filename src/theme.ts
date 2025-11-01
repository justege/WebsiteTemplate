import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: "#fff0e5" },
          100: { value: "#ffe0cc" },
          200: { value: "#ffc299" },
          300: { value: "#ffa366" },
          400: { value: "#ff8533" },
          500: { value: "#ec5905" }, // FizyoPraksis orange - rgb(236, 89, 5)
          600: { value: "#cc4c04" },
          700: { value: "#993903" },
          800: { value: "#662602" },
          900: { value: "#331301" },
        },
        secondary: {
          50: { value: "#e6f9ff" },
          100: { value: "#cce5ff" },
          200: { value: "#99cdff" },
          300: { value: "#66b2ff" },
          400: { value: "#3399ff" },
          500: { value: "#0077ff" },
          600: { value: "#0066cc" },
          700: { value: "#004c99" },
          800: { value: "#003366" },
          900: { value: "#001933" },
        },
      },
      fonts: {
        heading: { value: "'Montserrat', sans-serif" },
        body: { value: "'Inter', sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        "chakra-body-bg": { value: "white" },
        "chakra-body-text": { value: "black" },
      },
    },
  },
  globalCss: {
    "html, body": {
      background: "white",
      color: "black",
      scrollBehavior: "smooth",
    },
  },
});