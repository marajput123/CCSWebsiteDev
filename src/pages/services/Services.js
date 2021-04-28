import React from "react";
import Title from "./Title";
import { serviceStyles } from "./style";
import Card from "../../components/card/Card";
import { Grid } from "@material-ui/core";
import { Heading } from "../../components/textcontainer";
import { services } from "../../data";

const Services = () => {
  const classes = serviceStyles();

  return (
    <>
      <Title />
      <div>
        <div className={classes.serviceTitle}>
          <Heading text={"Our Services"} />
        </div>
        <div className={classes.gridContainer}>
          <Grid
            container
            spacing={3}
            justify="center"
            className={classes.gridRoot}
          >
            {services.map((item, index) => {
              return (
                <React.Fragment key={item.title}>
                  <Grid
                    className={classes.gridStyles}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                  >
                    <Card
                      title={item.title}
                      subtitle={item.subtitle}
                      summary={item.summary}
                      features={item.features}
                      action={item.action}
                      link={item.link}
                      priceTag={item.priceTag}
                      image={item.image}
                      color={item.color}
                      modal={item.modal}
                    />
                  </Grid>
                </React.Fragment>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Services;
