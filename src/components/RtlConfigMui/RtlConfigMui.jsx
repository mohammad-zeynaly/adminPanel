import rtlPlugin from "stylis-plugin-rtl";
import { ThemeProvider, createTheme } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  typography: {
    fontFamily: [" iran-yekan-medium", "iran-yekan-medium"].join(","),
  },
  direction: "rtl",
});

function RtlConfigMui({ children }) {
  return (
    <div className="">
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </div>
  );
}

export default RtlConfigMui;
