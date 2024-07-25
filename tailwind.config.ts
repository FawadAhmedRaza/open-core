import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        "primary": '#294F74',
        "secondary": '#667085',
        "tertiary": '#667085',
        "quaternary": '#F9FAFB',
        "gray-1": '#EDF2F5',
        "gray-2": '#FCFCFD',
        "gray-3": '#EAECF0',
        "gray-4": '#D0D5DD',
        "gray-5": '#475467',
        "gray-6": '#98A2B3',
        "sky": '#F2F4F7',
        "neutral": '#f7f7f7',
        "custom_black": '#10202E',
        "custom_black_2": '#344054',
        "custom_black_3": '#1D2939',
      },
      fontSize: {
        '64fs': '64px',
        '40fs': '40px',
      },
      lineHeight: {
        '76lh': '76px',
        '50lh': '50px',
        '36lh': '36px',
      },
      width: {
        '900wd': '900px',
        '580wd': '580px',
        '170wd': '170px',
      },
      height: {
        '580px': '580px',
        '480px': '480px',
        '620px': '620px',
        '700px': '700px',
        '720px': '420px',
      },
      screens: {
        'min-400': '400px',
        'min-430': '430px'
      },
      borderRadius: {
        '18bd': '18px'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #2F5478 0%, #22405C 100%)',
        'union': "url('/assets/svg/union.svg')",
        'ideas-union': "url('/assets/svg/bg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
