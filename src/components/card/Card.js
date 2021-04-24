import React, { useState } from "react";
import virus from "../../static/svg/virus.svg";
import blood from "../../static/svg/blood.svg";
import dna from "../../static/svg/dna.svg";
import PriceTag from "./PriceTag";
import {
  Check,
  ArrowForwardIos,
  ErrorOutline,
  Email,
} from "@material-ui/icons/";
import {
  Button,
  Paper,
  Typography,
  IconButton,
  ClickAwayListener,
  Tooltip,
} from "@material-ui/core";
import { cardStyles, tooltipStyles } from "./styles";
import { SmallDialog } from "../dialog";

const Card = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const classes = cardStyles(props);

  const handleClose = () => {
    setOpenModal(false);
  };

  const renderImage = (image) => {
    if (image == "BLOOD") {
      return blood;
    } else if (image == "DNA") {
      return dna;
    }
    return virus;
  };
  return (
    <Paper className={classes.paperRoot} elevation={10}>
      <div className={classes.cardStyle}>
        {props.priceTag ? <PriceTag tag={props.priceTag} /> : null}

        <img height={"125px"} src={renderImage(props.image)} />
        <div className={classes.cardTitle}>
          <Typography variant={"h5"}>{props.title}</Typography>
          <Typography variant={"caption"}>{props.subtitle}</Typography>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.bodyHeading}>
            <Typography>{props.summary}</Typography>
          </div>
          <div className={classes.cardFeatures}>
            {props.features.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className={classes.bodyContent}>
                    {item.info ? (
                      <ArrowForwardIos style={{ color: "green" }} />
                    ) : (
                      <Check style={{ color: "green" }} />
                    )}
                    <Typography variant="subtitle1">{item.text}</Typography>
                    {item.tooltip ? <InfoToolTip text={item.tooltip} /> : null}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      <div className={classes.cardAction}>
        <Button
          href={props.link !== null ? props.link : null}
          onClick={(e) => setOpenModal(props.link ? false : true)}
          className={classes.buttonStyle}
          size="large"
        >
          {props.action}
        </Button>
      </div>
      <SmallDialog isOpen={openModal} handleClose={handleClose}>
        <Email />
        {props.modal ? props.modal.text : props.modal}
      </SmallDialog>
    </Paper>
  );
};

const InfoToolTip = (props) => {
  const classes = tooltipStyles();
  const [isOpen, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div className={classes.tooltipRoot}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={isOpen}
            disableFocusListener
            disableHoverListener
            title={props.text}
          >
            <ErrorOutline onClick={handleTooltipOpen} />
          </Tooltip>
        </div>
      </ClickAwayListener>
    </>
  );
};

export default Card;
