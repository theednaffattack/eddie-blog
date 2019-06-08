const blue = "#07c"

const darken = n => `rgba(0,0,0,${n})`

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue,
    lightgray: "#f6f6ff",
    text: "rgb(68, 68, 68)",
    muted: "#888888",
    baseFill: "rgb(204, 204, 204)",
    sidebar: "rgb(242,242,242)",

    shade: [
      darken(0),
      darken(1 / 8),
      darken(1 / 4),
      darken(3 / 8),
      darken(1 / 2),
      darken(5 / 8),
      darken(3 / 4),
      darken(7 / 8),
      darken(1),
    ],
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "montserrat, sans-serif",
    mono: "Menlo, monospace",
  },
  borders: {
    lime: "2px limegreen solid",
    crimson: "2px crimson solid",
    steelblue: "2px steelblue solid",
    purp: "2px rebeccapurple solid",
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
    special: "0 0 16px 4px rgba(0, 0, 0, .125)",
    modalItem: "0px 13px 33px 0px rgba(0, 0, 0, 0.1)",
  },
  radii: {
    card: "17px",
  },
  buttons: {
    primary: {
      color: "#fff",
      backgroundColor: blue,
    },
    outline: {
      color: "#fff",
      backgroundColor: "transparent",
      border: "2px rgba(255,255,255,0.4) solid",
    },
    letterSpacings: [".05em", ".125", "2em"],
    gradient: {
      backgroundImage:
        "linear-gradient( 87deg, rgb(210,48,120) 6%, rgb(254,97,97) 74%, rgb(255,121,85) 100%)",

      boxShadow: "0px 10px 27px 0px rgba(0, 0, 0, 0.1);",
    },
  },
  zIndices: {
    sidebar: 9999,
  },
}

export default theme
