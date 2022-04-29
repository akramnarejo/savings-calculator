import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider'
import {useEffect, useState} from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';

import { Formik,useFormik } from 'formik';
import * as yup from 'yup';

import {findTotalInvestment} from './calculations'

function Main() {
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)
  const [isClicked4, setIsClicked4] = useState(false)
  const [isClicked5, setIsClicked5] = useState(false)
  const [year, setYear] = useState(0)

  //calculation states
  const [costAvoidance, setCostAvoidance] = useState(0)
  const [spaceOptimization, setSpaceOptimization] = useState(0)
  const [totalInvestment, setTotalInvestment] = useState(0)
  const [totalSavings, setTotalSavings] = useState(0)
  const [netSavings, setNetSavings] = useState(0)
  const [roi, setRoi] = useState(0)
  const [costSF, setCostSF] = useState(0)
//   const [directSavings, setDirectSavings] = useState(0)
//   const [savingsComparison, setSavingsComparison] = useState(0)

  //blur results
  const [isBlurred, setIsBlurred] = useState(true)

  const formik = useFormik({
    initialValues: {
        leaseCost: null,
        portfolio: null,
        capexSpends: null,
        estNeeds: null,
        email: null,
    },
    validationSchema: yup.object().shape({
        leaseCost: yup.string().matches(/[0-9]+/, 'Invalid (Enter digits).').required('Required.').nullable(),
        portfolio: yup.string().matches(/[0-9]+/, 'Invalid (Enter digits).').required('Required.').nullable(),
        capexSpends: yup.string().matches(/[0-9]+/, 'Invalid (Enter digits).').required('Required.').nullable(),
        estNeeds: yup.string().matches(/[0-9]+/, 'Invalid (Enter digits).').required('Required.').nullable(),
        email: yup.string().email('Invalid email').optional().nullable(),
    }),
    onSubmit: (values) => {
        console.log(values)
        setIsBlurred(false)
    }
});

const { values, touched, errors, setFieldValue, handleSubmit, handleBlur } = formik;

const ErrorMessage = ({name}) => {
    let isTouched = touched[name]
    let errorMess = errors[name]
    return (
        <Typography color='error' component='span'>{isTouched && Boolean(errorMess) ? isTouched && errorMess : null}</Typography>
    );
};

  const calculateSavings = (val) => {
    setYear(val)
    setCostAvoidance(0)
    setCostAvoidance(values.estNeeds*0.84*values.leaseCost)
    setSpaceOptimization(0)
    setSpaceOptimization((values.capexSpends*0.025*values.portfolio)*val)
    setTotalInvestment(0)
    setTotalInvestment(findTotalInvestment(values.portfolio))
    setTotalSavings(0)
    setNetSavings(0)
    setRoi(0)
    setCostSF(0)
    // setDirectSavings(0)
    // setSavingsComparison(0)
  }

  useEffect(() => {
    setTotalSavings(costAvoidance+spaceOptimization)
    const result = totalSavings - totalInvestment
    setNetSavings(result > 0 ? result : 0)
    setRoi(netSavings/totalInvestment)
    if(totalInvestment){
    //   setDirectSavings(findDirectSavings(totalInvestment, values.portfolio))
    //   setSavingsComparison(findSavigsComparison(totalInvestment, values.portfolio))
      setCostSF(totalInvestment/(((+values.portfolio)+(+values.estNeeds))*year))
    }
  },[totalSavings,netSavings,totalInvestment,values.portfolio, costAvoidance, spaceOptimization])

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
    <Paper elevation={3} sx={{padding: {md: 5, xs: 2}, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Box my={5}>
        {/* <Typography component="h1" sx={{fontWeight: 900, fontSize:{lg:54, md:35,xs:28}}}>SAVINGS CALCULATOR</Typography> */}
        </Box>
        <Formik initialValues={formik.initialValues} enableReinitialize>
            <form onSubmit={handleSubmit}>
                <Box maxwidth="900px">
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={11} md={5} sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{lg:20,md:18,sm:16,xs:14}}}>MONTHLY LEASE COST</Typography>
                            <Box className='textfieldBox'>
                                <Box className='innerBox'>
                                    <Typography variant='subtitle2' component='span' sx={{color: 'gray', fontWeight: 700, fontSize:{lg:20,md: 18,xs: 16}}}>$</Typography>
                                    <input 
                                        type='text' 
                                        className='textfield1' 
                                        placeholder='00'
                                        name='leaseCost'
                                        onBlur={handleBlur}
                                        onChange={e => setFieldValue('leaseCost', e.target.value)}
                                    />
                                </Box>
                                <Typography variant='subtitle2' component='span' sx={{textAlign: 'end',width: '35%', color: 'gray', fontWeight: 700, fontSize:{lg:20,md: 18,xs: 16}}}>per sq.ft.</Typography>
                            </Box>
                            <ErrorMessage name="leaseCost" />
                        </Grid>
                        <Grid item xs={11} md={5} sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{lg:20,md:18,sm:16,xs:14}}}>ANNUAL CAPEX SPEND</Typography>
                            <Box className='textfieldBox'>
                                <Box className='innerBox'>
                                    <Typography variant='subtitle2' component='span' sx={{color: 'gray', fontWeight: 700, fontSize:{lg:20,md: 18,xs: 16}}}>$</Typography>
                                    <input 
                                        type='text' 
                                        className='textfield1' 
                                        placeholder='00'
                                        name="capexSpends"
                                        onBlur={handleBlur}
                                        onChange={e => setFieldValue('capexSpends', e.target.value)}
                                    />
                                </Box>
                                <Typography variant='subtitle2' component='span' sx={{textAlign: 'end',width: '35%', color: 'gray', fontWeight: 700, fontSize:{lg:20,md: 18,xs: 16}}}>per sq.ft.</Typography>
                            </Box>
                            <ErrorMessage name="capexSpends" />
                        </Grid>
                        <Grid item xs={11} md={5} sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{lg:20,md:18,sm:16,xs:14}}}>TOTAL PORTFOLIO</Typography>
                            <Box className='textfieldBox'>
                                <Box className='innerBox'>
                                    <Typography variant='subtitle2' component='span' sx={{color: 'gray', fontWeight: 700, fontSize:{lg:20,md: 18,xs: 16}}}>#</Typography>
                                    <input 
                                        type='text' 
                                        className='textfield2' 
                                        placeholder='00'
                                        name="portfolio"
                                        onBlur={handleBlur}
                                        onChange={e => setFieldValue('portfolio', e.target.value)}
                                    />
                                </Box>
                                <Typography variant='subtitle2' component='span' sx={{textAlign: 'end',width: '35%', color: 'gray', fontWeight: 700, fontSize:{lg:20,md: 18,xs: 16}}}>sq.ft.</Typography>
                            </Box>
                            <ErrorMessage name="portfolio" />
                        </Grid>
                        <Grid item xs={11} md={5} sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{lg:20,md:18,sm:16,xs:14}}}>EST. NEW SQ.FT. NEEDS</Typography>
                            <Box className='textfieldBox'>
                                <Box className='innerBox'>
                                    <Typography variant='subtitle2' component='span' sx={{color: 'gray', fontWeight: 700, fontSize:{lg:20,md: 18,xs: 16}}}>#</Typography>
                                    <input 
                                        type='text' 
                                        className='textfield2' 
                                        placeholder='00'
                                        name="estNeeds"
                                        onBlur={handleBlur}
                                        onChange={e => setFieldValue('estNeeds', e.target.value)}
                                    />
                                </Box>
                                <Typography variant='subtitle2' component='span' sx={{textAlign: 'end',width: '35%', color: 'gray', fontWeight: 700, fontSize:{lg:20,md: 18,xs: 16}}}>sq.ft.</Typography>
                            </Box>
                            <ErrorMessage name="estNeeds" />
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={4} display='flex' justifyContent='center' alignItems='center' gap={1} flexWrap='wrap'>
                    <Typography variant="subtitle2" component='p' sx={{fontWeight: 700, fontSize:{md:20,xs:16}}}>Select Duration: </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, flexWrap: 'wrap'}}>
                        <Button 
                            className={isClicked1 && "yearBtn"}
                            name="1"
                            variant="text"
                            disableRipple 
                            type='submit'
                            sx={{fontSize: '18px', fontWeight: '900', padding: '2px 5px', color: '#041061', fontFamily: 'Verdana, sans-serif'}}
                            onClick={handleClick}
                            >1 YEAR
                        </Button>
                        <Button 
                            className={isClicked2 && "yearBtn"}
                            name="2" 
                            variant="text"
                            disableRipple 
                            type="submit"
                            sx={{fontSize: '18px', fontWeight: '900', padding: '2px 5px', color: '#041061', fontFamily: 'Verdana, sans-serif'}}
                            onClick={handleClick}
                            >2 YEAR
                        </Button>
                        <Button 
                            className={isClicked3 && "yearBtn"}
                            name="3" 
                            variant="text"
                            disableRipple 
                            type="submit"
                            sx={{fontSize: '18px', fontWeight: '900', padding: '2px 5px', color: '#041061', fontFamily: 'Verdana, sans-serif'}}
                            onClick={handleClick}
                            >3 YEAR
                        </Button>
                        <Button 
                            className={isClicked4 && "yearBtn"}
                            name="4" 
                            variant="text"
                            disableRipple 
                            type="submit"
                            sx={{fontSize: '18px', fontWeight: '900', padding: '2px 5px', color: '#041061', fontFamily: 'Verdana, sans-serif'}}
                            onClick={handleClick}
                            >4 YEAR
                        </Button>
                        <Button 
                            className={isClicked5 && "yearBtn"}
                            name="5" 
                            variant="text"
                            disableRipple 
                            type="submit"
                            sx={{fontSize: '18px', fontWeight: '900', padding: '2px 5px', color: '#041061', fontFamily: 'Verdana, sans-serif'}}
                            onClick={handleClick}
                            >5 YEAR
                        </Button>
                    </Box>
                </Box>
            </form>
        </Formik>
        {/* {
            !isBlurred && (<Box mt={2}>
                <Formik initialValues={formik.initialValues} enableReinitialize>
                    <form onSubmit={handleSubmit}>
                    <Typography variant='h6' component='p' sx={{fontSize:{md: 20, sm:18,xs:16}}}>To see result, please input your email</Typography>
                    <Box display="flex" flexDirection="column" alignItems="flex-start" mt={1}>
                        <ErrorMessage name="email" />
                        <Box sx={{display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap'}}>
                            <TextField 
                                inputProps={{style: {fontSize: 16, padding: "5px 10px"}}} 
                                placeholder='Email'
                                name="email"
                                id="email"
                                onBlur={handleBlur}
                                onChange={e => setFieldValue('email', e.target.value)}
                                />
                            <Button 
                                variant="contained" 
                                size="small" 
                                type="submit"
                                disableElevation 
                                sx={{fontWeight: 900}}>Submit</Button>
                        </Box>
                    </Box>
                    </form>
                </Formik>
            </Box>) */}
        <Box mt={3} sx={{width:"100%", padding: {sm:'10px 45px', lg: '20px 85px'}, boxSizing: 'border-box', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', flexWrap:'wrap', gap: 2}}> 
        <Typography mt={1} component="h3" sx={{fontSize:{sm:"20px", md:"24", lg:"26px" }}} px={2} py={1} borderRadius={1} boxSizing="border-box" backgroundColor="black" color="white" fontWeight={900} className="heading">Savings</Typography>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
            <Box display="flex" alignItems="center" gap={.2}>
                <Tooltip title="1% savings on new space over the life of the lease." placement="right"><InfoOutlinedIcon fontSize='small'/></Tooltip>
                <Typography component="p" lineHeight={0.5} color="#201747" fontSize={{md: 16}}>COST AVOIDANCE:</Typography>
            </Box>
            <Typography className={isBlurred ? "blurr": ""} component="p" lineHeight={0.5} color="#201747" fontSize={{md: 28, xs: 24}}>{`$${Math.round(costAvoidance).toLocaleString()}`}</Typography>
            </Box>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <Box display="flex" alignItems="center" gap={.2}>
                <Tooltip title="2.5% Capex savings across current portfolio tenor." placement='right' >
                <InfoOutlinedIcon fontSize='small' />
                </Tooltip>
                <Typography component="p" lineHeight={1} color="#201747" fontSize={{md: 16}}>CAPEX COST SAVINGS:</Typography>
            </Box>
            <Typography className={isBlurred ? "blurr": ""} component="p" lineHeight={0.5} color="#201747" fontSize={{md: 28, xs: 24}}>{`$${Math.round(spaceOptimization).toLocaleString()}`}</Typography>
            </Box>
            <Typography mt={1} component="h3" sx={{fontSize:{sm:"20px", md:"24", lg:"26px" }}} px={2} py={1} borderRadius={1} boxSizing="border-box" backgroundColor="black" color="white" fontWeight={900} className="heading">Return</Typography>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <Typography component="p" lineHeight={0.5} color="#201747" fontSize={{md: 16}}>TOTAL INVESTMENT:</Typography>
                <Typography className={isBlurred ? "blurr": ""} component="p" lineHeight={0.5} color="#201747" fontSize={{md: 28, xs: 24}}>{`$${totalInvestment.toLocaleString()}`}</Typography>
            </Box>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <Typography component="p" lineHeight={0.5} color="#201747" fontSize={{md: 16}}>TOTAL SAVINGS:</Typography>
                <Typography className={isBlurred ? "blurr": ""} component="p" lineHeight={0.5} color="#201747" fontSize={{md: 28, xs: 24}}>{`$${Math.round(totalSavings).toLocaleString()}`}</Typography>
            </Box>
            <Divider />
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <Typography component="p" lineHeight={0.5} color="#201747" fontSize={{md: 16}}>NET SAVINGS:</Typography>
                <Typography className={isBlurred ? "blurr": ""} component="p" lineHeight={0.5} color="#201747" fontSize={{md: 28, xs: 24}}>{`$${Math.round(netSavings).toLocaleString()}`}</Typography>
            </Box>
            <Typography mt={1} component="h3" sx={{fontSize:{sm:"20px", md:"24", lg:"26px" }}} px={2} py={1} borderRadius={1} boxSizing="border-box" backgroundColor="black" color="white" fontWeight={900} className="heading">Estimations</Typography>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <Typography component="p" lineHeight={0.5} color="#201747" fontSize={{md: 16}}>ROI:</Typography>
                <Typography className={isBlurred ? "blurr": ""} component="p" lineHeight={0.5} color="#201747" fontSize={{md: 28, xs: 24}}>{`${Math.round(roi*100)}%`}</Typography>
            </Box>
            <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <Typography component="p" lineHeight={1} color="#201747" fontSize={{md: 16}}>COST/SF:</Typography>
                <Typography className={isBlurred ? "blurr": ""} component="p" lineHeight={0.5} color="#201747" fontSize={{md: 28, xs: 24}}>{`$${Math.fround(costSF).toFixed(2)}`}</Typography>
            </Box>
            {/* <Typography mt={1} component="h3" sx={{fontSize:{sm:"20px", md:"24", lg:"26px" }}} px={2} py={1} borderRadius={1} boxSizing="border-box" backgroundColor="black" color="white" fontWeight={900} className="heading">Competitor Comparison</Typography> */}
            {/* <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <Typography component="p" lineHeight={0.5} color="#201747" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>DIRECT SAVINGS W/ AT:</Typography>
            <Typography component="p" lineHeight={0.5} color="#201747" fontFamily="Lato,'Lucida Grande',Verdana,sans-serif" fontSize={{md: 16}}>{`$${Math.fround(directSavings).toFixed(2)}`}</Typography>
            </Box> */}
            {/* <Box width="100%" sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <Typography component="p" lineHeight={1} color="#201747" fontSize={{md: 16}}>%SAVINGS COMPARISON:</Typography>
                <Typography className={isBlurred ? "": "blurr"} component="p" lineHeight={0.5} color="#201747" fontSize={{md: 16}}>{`${Math.fround(savingsComparison*100).toFixed(2)}%`}</Typography>
            </Box> */}
        </Box>
    </Paper>
    </Container>
  );
}

export default Main;
