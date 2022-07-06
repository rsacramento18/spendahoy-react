import { extendTheme } from "@chakra-ui/react"
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"
import { ColorStyles as colors } from './colorStyles'

const theme = extendTheme({
  colors,
  fonts: {
    body: "Sora, arial"
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "body",
        color: mode("background", "whiteAlpha.900")(props),
        bg: mode("foreground", "gray.800")(props),
        lineHeight: "base",
      }
    }),
  }
});

export default theme; 

