import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider'
import {useEffect, useState} from 'react'
import {findTotalInvestment, findDirectSavings, findSavigsComparison} from './calculations'


function App() {
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)
  const [isClicked4, setIsClicked4] = useState(false)
  const [isClicked5, setIsClicked5] = useState(false)
  const [year, setYear] = useState(0)
  // input states
  const [leaseCost, setLeaseCost] = useState(0)
  const [portfolio, setPortfolio] = useState(0)
  const [capexSpend, setCapexSpend] = useState(0)
  const [estNeeds, setEstNeeds] = useState(0)
  //calculation states
  const [costAvoidance, setCostAvoidance] = useState(0)
  const [spaceOptimization, setSpaceOptimization] = useState(0)
  const [totalInvestment, setTotalInvestment] = useState(0)
  const [totalSavings, setTotalSavings] = useState(0)
  const [netSavings, setNetSavings] = useState(0)
  const [roi, setRoi] = useState(0)
  const [costSF, setCostSF] = useState(0)
  const [directSavings, setDirectSavings] = useState(0)
  const [savingsComparison, setSavingsComparison] = useState(0)

  const calculateSavings = (val) => {
    setYear(val)
    setCostAvoidance(0)
    setCostAvoidance(estNeeds*0.84*leaseCost)
    setSpaceOptimization(0)
    setSpaceOptimization((capexSpend*0.025*portfolio)*val)
    setTotalInvestment(0)
    setTotalInvestment(findTotalInvestment(portfolio))
    setTotalSavings(0)
    setNetSavings(0)
    setRoi(0)
    setCostSF(0)
    setDirectSavings(0)
    setSavingsComparison(0)
  }

  useEffect(() => {
    setTotalSavings(costAvoidance+spaceOptimization)
    const result = totalSavings - totalInvestment
    setNetSavings(result > 0 ? result : 0)
    setRoi(netSavings/totalInvestment)
    if(totalInvestment){
      setDirectSavings(findDirectSavings(totalInvestment, portfolio))
      setSavingsComparison(findSavigsComparison(totalInvestment, portfolio))
      setCostSF(totalInvestment/((portfolio+estNeeds)*year))
    }
  },[totalSavings,netSavings,totalInvestment,portfolio, costAvoidance, spaceOptimization])

  const handleClick = e => {
    switch(e.target.name){
      case "1":
        setIsClicked1(true)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked4(false)
        setIsClicked5(false)
        calculateSavings(1)
        break;
      case '2':
        setIsClicked1(false)
        setIsClicked2(true)
        setIsClicked3(false)
        setIsClicked4(false)
        setIsClicked5(false)
        calculateSavings(2)
        break;
      case '3':
        setIsClicked1(false)
        setIsClicked2(false)
        setIsClicked3(true)
        setIsClicked4(false)
        setIsClicked5(false)
        calculateSavings(3)
        break;
      case '4':
        setIsClicked4(true)
        setIsClicked1(false)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked5(false)
        calculateSavings(4)
        break;
      case '5':
        setIsClicked5(true)
        setIsClicked1(false)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked4(false)
        calculateSavings(5)
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
              <TextField 
                sx={{width: "100%"}} 
                inputProps={{style: {fontSize: 20}}} 
                placeholder='$00.0' 
                variant='standard'
                onChange={e => setLeaseCost(parseFloat(e.target.value))}/>
            </Grid>
            <Grid item xs={10} md={5} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{sm:16,xs:12}}}>TOTAL PORTFOLIO</Typography>
              <TextField 
                sx={{width: "100%"}} 
                inputProps={{style: {fontSize: 20}}} 
                placeholder='$00.0' 
                variant='standard'
                onChange={e => setPortfolio(parseFloat(e.target.value))}/>
            </Grid>
            <Grid item xs={10} md={5} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{sm:16,xs:12}}}>ANNUAL CAPEX SPEND</Typography>
              <TextField 
                sx={{width: "100%"}} 
                inputProps={{style: {fontSize: 20}}} 
                placeholder='$00.0' 
                variant='standard'
                onChange={e => setCapexSpend(parseFloat(e.target.value))}
                />
            </Grid>
            <Grid item xs={10} md={5} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{sm:16,xs:12}}}>EST. NEW SQ.FT. NEEDS</Typography>
              <TextField 
                sx={{width: "100%"}} 
                inputProps={{style: {fontSize: 20}}} 
                placeholder='$00.0' 
                variant='standard'
                onChange={e => setEstNeeds(parseFloat(e.target.value))}
                />
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
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>{`$${costAvoidance.toLocaleString()}`}</Typography>
            </Box>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={1} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>SPACE OPTIMIZATION:<br />CAPEX COST SAVINGS</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>{`$${Math.round(spaceOptimization).toLocaleString()}`}</Typography>
            </Box>
          <Typography mt={1} component="h3" sx={{fontSize:{sm:"20px", md:"24", lg:"26px" }}} px={2} py={1} borderRadius={1} boxSizing="border-box" backgroundColor="black" color="white" fontWeight={900} className="heading">Return</Typography>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>TOTAL INVESTMENT:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>{`$${totalInvestment.toLocaleString()}`}</Typography>
            </Box>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>TOTAL SAVINGs:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>{`$${Math.round(totalSavings).toLocaleString()}`}</Typography>
            </Box>
            <Divider />
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>NET SAVINGS:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>{`$${netSavings.toLocaleString()}`}</Typography>
            </Box>
          <Typography mt={1} component="h3" sx={{fontSize:{sm:"20px", md:"24", lg:"26px" }}} px={2} py={1} borderRadius={1} boxSizing="border-box" backgroundColor="black" color="white" fontWeight={900} className="heading">Estimations</Typography>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>ROI:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>{`${Math.round(roi*100)}%`}</Typography>
            </Box>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={1} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>COST/SF:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>{`$${Math.fround(costSF).toFixed(2)}`}</Typography>
            </Box>
          <Typography mt={1} component="h3" sx={{fontSize:{sm:"20px", md:"24", lg:"26px" }}} px={2} py={1} borderRadius={1} boxSizing="border-box" backgroundColor="black" color="white" fontWeight={900} className="heading">Competitor Comparison</Typography>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>DIRECT SAVINGS W/ AT:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>{`$${Math.fround(directSavings).toFixed(2)}`}</Typography>
            </Box>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <Typography component="p" lineHeight={1} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>%SAVINGS COMPARISON:</Typography>
              <Typography component="p" lineHeight={0.5} color="darkblue" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>{`${Math.fround(savingsComparison*100).toFixed(2)}%`}</Typography>
            </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
