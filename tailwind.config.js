module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
    options: {},
  },
  theme: {
    extend: {
      boxShadow: {
        textarea: "0px 0px 4px rgba(0, 0, 0, 0.16)",
        boxshadow: "0px 0px 6px rgba(0, 0, 0, 0.16)",
        boxshadowlg: "0 5px 30px rgba(0,0,0,.1), 0 2px 30px rgba(0,0,0,.07);",
        centyshadow: "0px 10px 30px rgba(0, 0, 0, 0.04)",
      },
      colors: {
        centygreen: "#00BB79",
        centyblue: "#007FD6",
        centydark: "#111111",
        centygrey: "#737373",
        centygrey2: "#D2D2D2",
        centylightblue: "#FBFBFF",
        centylightgrey: "#F8F8F8",
        centylightdark: "#BEBEBE",
      },
      spacing: {
        7: "1.75rem",
        11: "2.90rem",
        18: "4.50rem",
        28: "7rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        120: "30rem",
      },
      fontSize: {
        xxs: "0.5rem",
        "7xl": "5rem",
      },
      width: {
        7: "1.75rem",
        "9/10": "90%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      zIndex: {
        999: "999",
      },
    },
  },
  variants: {},
  plugins: [],
};
