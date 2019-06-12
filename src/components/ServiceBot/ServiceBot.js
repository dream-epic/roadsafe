import React from "react";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import ChatBot from "react-simple-chatbot";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "600",
  headerBgColor: "#fca311",
  headerFontColor: "#ffffff",
  headerFontSize: "1rem",
  botBubbleColor: "#fca311",
  botFontColor: "#ffffff",
  userBubbleColor: "#ffffff",
  userFontColor: "#4a4a4a"
};

export default function ServiceBot() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle={"Need Help?"}
        placeholder={"Click an option given above"}
        steps={[
          {
            id: "welcome-1",
            message: "Hi, welcome to RoadSafe!",
            trigger: "welcome-2"
          },
          {
            id: "welcome-2",
            message: "How can I help you?",
            trigger: "userneeds"
          },
          {
            id: "userneeds",
            options: [
              {
                value: 1,
                label: "I want to report a pothole in Chicago!",
                trigger: "report"
              },
              {
                value: 2,
                label:
                  "I want to request compensation for vehicle damege due to potholes in Chicago streets!",
                trigger: "compensation"
              },
              {
                value: 3,
                label: "I want to learn more about potholes in Chicago!",
                trigger: "learn"
              }
            ]
          },
          {
            id: "report",
            component: <Link to="/map">Report through This Link</Link>,
            trigger: "again"
          },
          {
            id: "compensation",
            component: (
              <a
                href="https://www.chicityclerk.com/community-affairs/claims"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request at This Link
              </a>
            ),
            trigger: "again"
          },
          {
            id: "learn",
            component: (
              <a
                href="https://www.chicago.gov/content/dam/city/depts/cdot/PotholeFAQ_winter0910.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More at This Link
              </a>
            ),
            trigger: "again"
          },
          {
            id: "again",
            message: "Do you still need help?",
            trigger: "confirm"
          },
          {
            id: "confirm",
            options: [
              {
                value: 1,
                label: "Yes",
                trigger: "userneeds"
              },
              {
                value: 2,
                label: "No",
                trigger: "thanks"
              }
            ]
          },
          {
            id: "thanks",
            message: "Thank you!",
            end: true
          }
        ]}
      />
    </ThemeProvider>
  );
}
