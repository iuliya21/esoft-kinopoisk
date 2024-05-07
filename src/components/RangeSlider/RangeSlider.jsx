import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import PropTypes from "prop-types";

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

function RangeSlider({value, setValue}) {

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: 280 }}>
        <Slider
          getAriaLabel={() => "Years range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          min={1994}
          max={2018}
          disableSwap
          color="myGreen"
        />
      </Box>
    </ThemeProvider>
  );
}

RangeSlider.propTypes = {
  value: PropTypes.array,
  setValue: PropTypes.func,
};

export default RangeSlider;
