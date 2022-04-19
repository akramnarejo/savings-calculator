import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';


function App() {
  return (
    <Container>
      <Paper elevation={3} sx={{border: '1px solid', padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Box mt={5} mb={10}>
          <Typography variant="h4" component="h1" sx={{fontWeight: 700, fontSize:{md:30,xs:20}}}>SAVINGS CALCULATOR</Typography>
        </Box>
        <Box maxwidth="900px">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={10} md={5} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{sm:16,xs:12}}}>MONTHLY LEASE COST</Typography>
              <TextField sx={{width: "100%"}} inputProps={{style: {fontSize: 20}}} placeholder='$00.0' variant='standard'/>
            </Grid>
            <Grid item xs={10} md={5} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{sm:16,xs:12}}}>MONTHLY LEASE COST</Typography>
              <TextField sx={{width: "100%"}} inputProps={{style: {fontSize: 20}}} placeholder='$00.0' variant='standard'/>
            </Grid>
            <Grid item xs={10} md={5} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{sm:16,xs:12}}}>MONTHLY LEASE COST</Typography>
              <TextField sx={{width: "100%"}} inputProps={{style: {fontSize: 20}}} placeholder='$00.0' variant='standard'/>
            </Grid>
            <Grid item xs={10} md={5} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <Typography variant='subtitle2' component='p' sx={{fontWeight: 700, fontSize:{sm:16,xs:12}}}>MONTHLY LEASE COST</Typography>
              <TextField sx={{width: "100%"}} inputProps={{style: {fontSize: 20}}} placeholder='$00.0' variant='standard'/>
            </Grid>
          </Grid>
        </Box>
        <Box mt={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, flexWrap: 'wrap'}}>
          <Button variant="text" sx={{fontSize: '18px', fontWeight: '900'}}>1 YEAR</Button>
          <Button variant="text" sx={{fontSize: '18px', fontWeight: '900'}}>2 YEAR</Button>
          <Button variant="text" sx={{fontSize: '18px', fontWeight: '900'}}>3 YEAR</Button>
          <Button variant="text" sx={{fontSize: '18px', fontWeight: '900'}}>4 YEAR</Button>
          <Button variant="text" sx={{fontSize: '18px', fontWeight: '900'}}>5 YEAR</Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
