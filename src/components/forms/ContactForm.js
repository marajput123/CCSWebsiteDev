import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { contactStyles } from "./styles";
import { Heading } from "../textcontainer/index";
import validator from "validator";
import send_form from "../../api/send_form";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SuccessSnackbar } from "../snackbar";

const ContactForm = (props) => {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeyText, setHoneyText] = useState("");
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const classes = contactStyles();
  const wordCount = 1000 - message.split(" ").length;

  const onHandleClose = () => {
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setCompanyName("");
    setErrors({});
    props.handleClose();
  };

  const onCompleteForm = () => {
    if (
      email !== "" &&
      companyName !== "" &&
      phone !== "" &&
      subject !== "" &&
      message !== ""
    ) {
      return true;
    }
    return false;
  };

  const validate = () => {
    const err = { error: false };
    if (!validator.isEmail(email)) {
      err.error = true;
      err.email = "Invalid Email";
    }
    if (wordCount + 1 <= 0) {
      err.error = true;
      err.message = "word count exceded";
    }
    if (phone.length < 7 || phone.length > 15 || !validator.isNumeric(phone)) {
      err.error = true;
      err.phone = "Enter a valid phone number";
    }
    if (err.error === false) {
      setErrors({});
      return true;
    }
    setErrors({ ...err });
    return false;
  };

  const onClickSubmit = () => {
    const successCallback = () => {
      setSnackbar(true);
      onHandleClose();
    };
    const failureCallback = (errors) => {
      setErrors({ ...errors });
    };
    if (validate() && honeyText === "") {
      setLoader(true);
      const data = {
        email: email,
        message: message,
        phone: phone,
        subject: subject,
        companyName: companyName,
        honeyText: honeyText,
      };

      send_form(data, successCallback, failureCallback, setLoader);
    }
  };

  const handleClose = () => {
    setSnackbar(false);
  };

  return (
    <div>
      <Dialog
        className={classes.dialogRoot}
        open={props.isOpen}
        onClose={onHandleClose}
      >
        <Heading heading={"Contact us"} />
        <DialogContent>
          <div className={classes.root}>
            <Typography variant="subtitle2" style={{ color: "#00000042" }}>
              * Required
            </Typography>

            <TextField
              required
              id="contact-company-name"
              label="Company Name"
              variant="outlined"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              fullWidth
            />
            <TextField
              required
              error={errors.phone ? true : false}
              helperText={errors.phone ? errors.phone : null}
              id="contact-company-phone"
              label="Company Phone"
              variant="outlined"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              fullWidth
            />
            <TextField
              error={errors.email ? true : false}
              required
              id="contact-company-email"
              label="Company Email"
              variant="outlined"
              helperText={errors.email ? "Invalid Email" : null}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              fullWidth
            />
            <TextField
              required
              id="contact-company-emailsubject"
              label="Subject"
              variant="outlined"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              fullWidth
            />
            <TextField
              required
              error={wordCount < 0 ? true : false}
              helperText={
                wordCount < 0
                  ? " word count exceded"
                  : `${wordCount + 1} words remaining`
              }
              id="contact-company-message"
              label="Message"
              variant="outlined"
              multiline
              fullWidth
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <Typography
              variant="subtitle2"
              style={{ color: "#00000042", textAlign: "right" }}
            >
              Your Information will not be shared
            </Typography>
            <input
              id="name-pot-text"
              type="input"
              className={classes.textPotStyle}
              value="honeyText"
              onChange={(e) => setHoneyText(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions style={{ padding: "10px", justifyContent: "center" }}>
          {loader ? (
            <CircularProgress />
          ) : (
            <Button
              disabled={onCompleteForm() ? false : true}
              className={
                onCompleteForm() ? classes.activeButton : classes.disabledButton
              }
              onClick={onClickSubmit}
              size={"large"}
            >
              Submit
            </Button>
          )}
        </DialogActions>
        <IconButton onClick={onHandleClose} className={classes.closeIconStyle}>
          <Close />
        </IconButton>
      </Dialog>
      <SuccessSnackbar open={snackbar} handleClose={handleClose} />
    </div>
  );
};

export default ContactForm;
