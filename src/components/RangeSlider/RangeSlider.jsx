import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    myGreen: theme.palette.augmentColor({
      color: {
        main: "#2ecc71",
      },
      name: "green",
    }),
  },
});

function RangeSlider() {

  const [value, setValue] = useState([1994, 2017]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Years range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          min={1994}
          max={2017}
          disableSwap
          color="myGreen"
        />
      </Box>
    </ThemeProvider>
  );
}

export default RangeSlider;
