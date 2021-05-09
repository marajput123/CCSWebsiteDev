import { Grid, Paper, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import {
  Email,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Phone,
  LocationOn,
} from "@material-ui/icons";
import { contactStyles } from "./styles";
import { Heading, SubHeading } from "../../components/textcontainer";
import ContactForm from "../../components/forms/ContactForm";

const Contact = () => {
  const classes = contactStyles();
  return (
    <div className={classes.rootContainer}>
      <div className={classes.contactContainer}>
        <SubHeading
          subWeight={300}
          weight={500}
          heading="Get in touch"
          subheading="We would love to hear from you!"
        />
        <div style={{ paddingTop: "20px" }}>
          <div className={classes.contactElement}>
            <Email />
            <Typography>admin@carolinaclinicals.com</Typography>
          </div>
          <div className={classes.contactElement}>
            <Phone />
            <Typography>919-999-9999</Typography>
          </div>
          <div className={classes.contactElement}>
            <LocationOn />
            <Typography>1127 Kildaire Farm Rd, Cary, NC 27511</Typography>
          </div>
          <div className={classes.socialContainer}>
            <Facebook className={classes.socialIcon} />
            <Twitter className={classes.socialIcon} />
            <LinkedIn className={classes.socialIcon} />
            <Instagram className={classes.socialIcon} />
          </div>
        </div>
        <div className={classes.messageContainer}>
          <Typography>or</Typography>
          <MessageBtn />
        </div>
      </div>
    </div>
  );
};

const MessageBtn = () => {
  const [isOpen, setOpen] = useState(false);
  const classes = contactStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={(e) => setOpen(true)} className={classes.buttonStyle}>
        Message us
      </Button>
      <ContactForm handleClose={handleClose} isOpen={isOpen} />
    </>
  );
};

export default Contact;
