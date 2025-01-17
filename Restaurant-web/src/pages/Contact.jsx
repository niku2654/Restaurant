import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import Layout from "../Components/Layout/Layout"
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
     <Box sx={{ my: 5, ml: 5, "& h4":{fontWeight:'bold', mb: 2, } }}>
      <Typography variant="h4">
        Contact The Heart of Kitchen
      </Typography>
      <p>
      At The Heart of Kitchen, we’re always happy to hear from our guests! Whether you’re looking to make a reservation, have a question about our menu, want to provide feedback, or need assistance with a special event or catering request, we’re here to help. Please feel free to get in touch with us using the contact form below, and one of our team members will respond as soon as possible. You can also reach us by phone or email for any urgent matters. We look forward to welcoming you soon!
      </p>
     </Box>
     <Box sx={{ m: 3, width:"600px", ml:10, "@media (max-width:600px)":{
      width:'300px',
     }}}>
      <TableContainer component={Paper}>
<Table aria-label="contact table">
  <TableHead>
    <TableRow>
      <TableCell sx={{bgcolor:'black', color:'white',}} align='center' >Contact Details</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>
        <SupportAgentIcon sx={{color:'red', pt:1}} /> 1800-800-802 (torollfree)
      </TableCell>
      
    </TableRow>
    <TableRow>
    <TableCell>
        <MailIcon sx={{color:'skyblue', pt:1}} /> halp@theheartofkitchen.com
      </TableCell>
    </TableRow>
    <TableRow>
    <TableCell>
        <CallIcon sx={{color:'green', pt:1}} /> +1 3423459843
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
      </TableContainer>
     </Box>
    </Layout>
  )
}

export default Contact
