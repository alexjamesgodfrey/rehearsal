import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive) / <alpha-value>)",
          foreground: "var(--destructive-foreground) / <alpha-value>)",
        },
        // muted: '#fff',
        // muted: {
        //   DEFAULT: 'var(--muted)',
        //   foreground: 'var(--muted-foreground)',
        // },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        // sidebar: 'var(--sidebar)',
        // 'sidebar-foreground': 'var(--sidebar-foreground)',

        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
          hover: "var(--muted-hover)",
        },
        "bad-color": "rgb(94, 92, 230)",
        "okay-color": "rgb(100, 210, 255)",
        "good-color": "rgb(191, 90, 242)",
        // New color additions
        // ["systemGray"]: {
        //   DEFAULT: "rgb(142, 142, 147)", // Default Light
        //   dark: "rgb(142, 142, 147)", // Default Dark
        // },
        // ["systemGray2"]: {
        //   DEFAULT: "rgb(174, 174, 178)", // Default Light
        //   dark: "rgb(99, 99, 102)", // Default Dark
        // },
        // ["systemGray3"]: {
        //   DEFAULT: "rgb(199, 199, 204)", // Default Light
        //   dark: "rgb(72, 72, 74)", // Default Dark
        // },
        // ["systemGray4"]: {
        //   DEFAULT: "rgb(209, 209, 214)", // Default Light
        //   dark: "rgb(58, 58, 60)", // Default Dark
        // },
        // ["systemGray5"]: {
        //   DEFAULT: "rgb(229, 229, 234)", // Default Light
        //   dark: "rgb(44, 44, 46)", // Default Dark
        // },
        ["systemRed"]: {
          DEFAULT: "rgb(255, 59, 48)", // Default Light
          dark: "rgb(255, 69, 58)", // Default Dark
        },
        ["systemOrange"]: {
          DEFAULT: "rgb(255, 149, 0)", // Default Light
          dark: "rgb(255, 159, 10)", // Default Dark
        },
        ["systemYellow"]: {
          DEFAULT: "rgb(255, 204, 0)", // Default Light
          dark: "rgb(255, 214, 10)", // Default Dark
        },
        ["systemGreen"]: {
          DEFAULT: "rgb(40, 205, 65)", // Default Light
          dark: "rgb(50, 215, 75)", // Default Dark
        },
        ["systemMint"]: {
          DEFAULT: "rgb(0, 199, 190)", // Default Light
          dark: "rgb(102, 212, 207)", // Default Dark
        },
        ["systemTeal"]: {
          DEFAULT: "rgb(89, 173, 196)", // Default Light
          dark: "rgb(106, 196, 220)", // Default Dark
        },
        ["systemCyan"]: {
          DEFAULT: "rgb(85, 190, 240)", // Default Light
          dark: "rgb(90, 200, 245)", // Default Dark
        },
        ["systemBlue"]: {
          DEFAULT: "rgb(0, 122, 255)", // Default Light
          dark: "rgb(10, 132, 255)", // Default Dark
        },
        ["systemIndigo"]: {
          DEFAULT: "rgb(88, 86, 214)", // Default Light
          dark: "rgb(94, 92, 230)", // Default Dark
        },
        ["systemPurple"]: {
          DEFAULT: "rgb(175, 82, 222)", // Default Light
          dark: "rgb(191, 90, 242)", // Default Dark
        },
        ["systemPink"]: {
          DEFAULT: "rgb(255, 45, 85)", // Default Light
          dark: "rgb(255, 55, 95)", // Default Dark
        },
        ["systemBrown"]: {
          DEFAULT: "rgb(162, 132, 94)", // Default Light
          dark: "rgb(172, 142, 104)", // Default Dark
        },
        ["systemGray6"]: {
          DEFAULT: "rgb(242, 242, 247)", // Default Light
          dark: "rgb(28, 28, 30)", // Default Dark
        },
        ["gray-700"]: "#2F2F2F",
        ["gray-800"]: "#212121",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s linear forwards",
        marquee: "marquee var(--marquee-duration) linear infinite",
        "spin-slow": "spin 4s linear infinite",
        "spin-slower": "spin 6s linear infinite",
        "spin-reverse": "spin-reverse 1s linear infinite",
        "spin-reverse-slow": "spin-reverse 4s linear infinite",
        "spin-reverse-slower": "spin-reverse 6s linear infinite",
        "spin-fast": "spin 0.3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  important: true,
} satisfies Config

export default config
