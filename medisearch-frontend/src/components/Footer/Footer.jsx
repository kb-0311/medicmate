import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#11263D",
        color: "white",
        padding: "20px 0",
      }}
    >
      <div className="footer-raw">
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>
              <Typography variant="h2" component="div">
                Medi
                <img
                  className="navbar-logo"
                  src="https://i.imgur.com/V7hGxsI.png"
                  alt="logo"
                ></img>
                Search
              </Typography>
            </div>
            <div>
              <List component="nav" aria-label="footer links">
                <ListItem button>
                  <ListItemText primary="News & Events" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Blogs" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Contact Us" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="About Us" />
                </ListItem>
              </List>
            </div>
            <div>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
            </div>
          </Box>
          <Divider style={{ marginTop: "20px", backgroundColor: "white" }} />
          <Typography variant="body2" style={{ marginTop: "10px" }}>
            © {new Date().getFullYear()}. All rights reserved.
          </Typography>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
