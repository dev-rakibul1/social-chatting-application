import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import About from "../../pages/about/About";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              textTransform: "capitalize",
              fontWeight: "500",
              fontSize: "17px",
            }}
            label="About us"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              textTransform: "capitalize",
              fontWeight: "500",
              fontSize: "17px",
            }}
            label="Gallery"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              textTransform: "capitalize",
              fontWeight: "500",
              fontSize: "17px",
            }}
            label="Friends"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Coming soon
      </TabPanel>
      <TabPanel value={value} index={2}>
        Coming soon
      </TabPanel>
    </Box>
  );
}

export default ProfileTabs;
