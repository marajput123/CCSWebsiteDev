import React from "react";
import Title from "./Title";
import { serviceStyles } from "./style";
import Card from "../../components/card/Card";
import { Grid, Typography } from "@material-ui/core";
import { Heading } from "../../components/textcontainer";

const data = [
  {
    title: "COVID-19 Testing",
    subtitle: "PCR&Rapids",
    summary:
      "To continue with helping our community overcome the current pandemic, we are now offering SARS COV2 RtPCR and antigen testing.",
    features: [
      {
        text: "Rapid antigen testing results within 45 minutes",
        tooltip: "100% Specificity & 88.4% Sensitivity",
        info: null,
      },
      {
        text: "PCR results within 48-72 hours",
        tooltip: null,
        info: null,
      },
      {
        text:
          "Check if your travel destination accepts rapid antigen test results",
        tooltip: null,
        info: true,
      },
    ],
    priceTag: "COVID",
    action: "Make a appointment",
    link: "http://expresstestnc.as.me",
    image: "VIRUS",
    color: "#41A814",
  },
  {
    title: "Vaccinations",
    subtitle: null,
    summary:
      "Vaccinations are key to debilitating the spread and effects of COVID-19 infections. Schedule your vaccination appointment today!",
    features: [
      {
        text: "18+ adults are eligible",
        tooltip: null,
        info: null,
      },
      {
        text: "Two-dose Moderna Vaccine",
        tooltip: null,
        info: null,
      },
      {
        text: "No cost to patients",
        tooltip: null,
        info: null,
      },
    ],
    priceTag: "VAX",
    action: "Make a appointment",
    link:
      "https://patientportal.advancedmd.com/147482/onlinescheduling/existing",
    image: "DNA",
    color: "#FFB655",
  },
  {
    title: "Corporate Services",
    subtitle: null,
    summary:
      "Have a large team that needs to get COVID tested/vaccinated? Contact us today to learn about concierge healthcare at your location!",
    features: [],
    priceTag: null,
    action: "Contact us",
    link: null,
    image: "BLOOD",
    color: "#FF423D",
  },
];

const Services = () => {
  const classes = serviceStyles();

  // console.log(data[0].link);
  return (
    <>
      <Title />
      <div style={{}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "8rem",
            marginTop: "8rem",
          }}
        >
          <Heading text={"Our Services"} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "100px",
          }}
        >
          <div style={{ width: "100%" }}>
            <Grid
              container
              spacing={3}
              justify="center"
              style={{ width: "100%", margin: "0px" }}
            >
              {data.map((item, index) => {
                return (
                  <React.Fragment key={item.title}>
                    <Grid
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "12px 12px 30px 12px",
                      }}
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
                      />
                    </Grid>
                  </React.Fragment>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
