import { Box, Typography } from "@mui/material"
import Layout from "../Components/Layout/Layout"


const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15, textAlign:"center",
        p:2,
        "& h4" :{
          fontWeight:'bold',
          my:2,
          fontSize:'2rem',
        },
        "& p": {
          textAlign: "justify",
        },
        "@media (max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize:'1.5rem'
          }
        }
      }}>
        <Typography variant="h4">
        The Heart of Kitchen
        </Typography>
        <p>
        We’re passionate about sourcing the freshest ingredients, supporting local farmers, and creating dishes that are as vibrant as they are delicious. Each plate tells a story, blending time-honored traditions with innovative twists to offer a unique dining experience. Our dedicated team strives to create not just a meal, but a moment—a place where friends, family, and guests can savor life’s simple pleasures. Whether you&apos;re here for a casual lunch, a special celebration, or a memorable dinner, we promise every visit will leave you feeling right at home.
        </p>
        <br />
        <p>
        We believe that dining is an experience to be savored, and that’s exactly what we aim to deliver—whether it’s a casual lunch with friends, a romantic dinner, or a celebration of life’s milestones. We’re honored to be part of your special moments and are committed to making every visit memorable.
        </p>
      </Box>
    </Layout>
  )
}

export default About
