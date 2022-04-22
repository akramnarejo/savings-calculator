import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider'
import {useState} from 'react'


function App() {
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)
  const [isClicked4, setIsClicked4] = useState(false)
  const [isClicked5, setIsClicked5] = useState(false)
  
  const handleClick = e => {
    switch(e.target.name){
      case "1":
        setIsClicked1(!isClicked1)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked4(false)
        setIsClicked5(false)
        break;
      case '2':
        setIsClicked1(false)
        setIsClicked2(!isClicked2)
        setIsClicked3(false)
        setIsClicked4(false)
        setIsClicked5(false)
        break;
      case '3':
        setIsClicked1(false)
        setIsClicked2(false)
        setIsClicked3(!isClicked3)
        setIsClicked4(false)
        setIsClicked5(false)
        break;
      case '4':
        setIsClicked4(!isClicked4)
        setIsClicked1(false)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked5(false)
        break;
      case '5':
        setIsClicked5(!isClicked5)
        setIsClicked1(false)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked4(false)
        break;
      default:
        
    }
  }
  return (
    <Container>
      <Paper elevation={3} sx={{padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Box mt={5} mb={10}>
          <Typography component="h1" sx={{fontWeight: 900, fontSize:{md:30,xs:20}}} fontFamily="Lato,'Lucida Grande',Verdana,sans-serif">SAVINGS CALCULATOR</Typography>
        </Box>
        <Box maxwidth="900px">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={10} md={5} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{sm:16,xs:12}}}>MONTHLY LEASE COST</Typography>
              <TextField sx={{width: "100%"}} inputProps={{style: {fontSize: 20}}} placeholder='$00.0' variant='standard'/>
            </Grid>
            <Grid item xs={10} md={5} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{sm:16,xs:12}}}>TOTAL PORTFOLIO</Typography>
              <TextField sx={{width: "100%"}} inputProps={{style: {fontSize: 20}}} placeholder='$00.0' variant='standard'/>
            </Grid>
            <Grid item xs={10} md={5} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{sm:16,xs:12}}}>ANNUAL CAPEX SPEND</Typography>
              <TextField sx={{width: "100%"}} inputProps={{style: {fontSize: 20}}} placeholder='$00.0' variant='standard'/>
            </Grid>
            <Grid item xs={10} md={5} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{sm:16,xs:12}}}>EST. NEW SQ.FT. NEEDS</Typography>
              <TextField sx={{width: "100%"}} inputProps={{style: {fontSize: 20}}} placeholder='$00.0' variant='standard'/>
            </Grid>
          </Grid>
        </Box>
        <Box mt={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, flexWrap: 'wrap'}}>
          <Button 
            className={isClicked1 && "yearBtn"}
            name="1"
            variant="text"
            disableRipple 
            sx={{fontSize: '18px', fontWeight: '900', padding: '2px 5px', fontFamily: 'Verdana, sans-serif'}}
            onClick={(e) => handleClick(e)}
            >1 YEAR
            </Button>
          <Button 
            className={isClicked2 && "yearBtn"}
            name="2" 
            variant="text"
            disableRipple 
            sx={{fontSize: '18px', fontWeight: '900', padding: '2px 5px', fontFamily: 'Verdana, sans-serif'}}
            onClick={e => handleClick(e)}
            >2 YEAR
            </Button>
          <Button 
            className={isClicked3 && "yearBtn"}
            name="3" 
            variant="text"
            disableRipple 
            sx={{fontSize: '18px', fontWeight: '900', padding: '2px 5px', fontFamily: 'Verdana, sans-serif'}}
            onClick={e => handleClick(e)}
            >3 YEAR
            </Button>
          <Button 
            className={isClicked4 && "yearBtn"}
            name="4" 
            variant="text"
            disableRipple 
            sx={{fontSize: '18px', fontWeight: '900', padding: '2px 5px', fontFamily: 'Verdana, sans-serif'}}
            onClick={e => handleClick(e)}
            >4 YEAR
            </Button>
          <Button 
            className={isClicked5 && "yearBtn"}
            name="5" 
            variant="text"
            disableRipple 
            sx={{fontSize: '18px', fontWeight: '900', padding: '2px 5px', fontFamily: 'Verdana, sans-serif'}}
            onClick={e => handleClick(e)}
            >5 YEAR
            </Button>
        </Box>
        <Box mt={2}>
          <Typography variant='h6' component='p' sx={{fontSize:{md: 20, sm:18,xs:16}}}>To see result, please input your email</Typography>
          <Box sx={{display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap'}} mt={1}>
            <TextField inputProps={{style: {fontSize: 16, padding: "5px 10px"}}} placeholder='Email'/>
            <Button variant="contained" size="small" disableElevation sx={{fontWeight: 900}}>Submit</Button>
          </Box>
        </Box>
        <Box mt={3} sx={{width:"100%", padding: {sm:'10px 45px', lg: '20px 85px'}, boxSizing: 'border-box', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', flexWrap:'wrap', gap: 2}}> 
          <Typography mt={1} component="h3" sx={{fontSize:{sm:"20px", md:"24", lg:"26px" }}} px={2} py={1} borderRadius={1} boxSizing="border-box" backgroundColor="black" color="white" fontWeight={900} className="heading">Savings</Typography>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>COST AVOIDANCE:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>$ 00.0</Typography>
            </Box>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={1} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>SPACE OPTIMIZATION:<br />CAPEX COST SAVINGS</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>$ 00.0</Typography>
            </Box>
          <Typography mt={1} component="h3" sx={{fontSize:{sm:"20px", md:"24", lg:"26px" }}} px={2} py={1} borderRadius={1} boxSizing="border-box" backgroundColor="black" color="white" fontWeight={900} className="heading">Return</Typography>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>TOTAL INVESTMENT:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>$ 00.0</Typography>
            </Box>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>TOTAL SAVINGS:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>$ 00.0</Typography>
            </Box>
            <Divider />
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>NET SAVINGS:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>$ 00.0</Typography>
            </Box>
          <Typography mt={1} component="h3" sx={{fontSize:{sm:"20px", md:"24", lg:"26px" }}} px={2} py={1} borderRadius={1} boxSizing="border-box" backgroundColor="black" color="white" fontWeight={900} className="heading">Estimations</Typography>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>ROI:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>$ 00.0</Typography>
            </Box>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={1} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>COST/SF:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>$ 00.0</Typography>
            </Box>
          <Typography mt={1} component="h3" sx={{fontSize:{sm:"20px", md:"24", lg:"26px" }}} px={2} py={1} borderRadius={1} boxSizing="border-box" backgroundColor="black" color="white" fontWeight={900} className="heading">Competitor Comparison</Typography>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>DIRECT SAVINGS W/ AT:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>$ 00.0</Typography>
            </Box>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={1} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>%SAVINGS COMPARISON:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>$ 00.0</Typography>
            </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
