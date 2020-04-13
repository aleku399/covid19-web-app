import React, { useState, SFC, FormEvent, ChangeEvent } from "react";
import { Tabs, Tab,
   AppBar, Toolbar, Typography, Container
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import covid19ImpactEstimator, { EstimatedData } from "../estimator";
import Case from "./GridList";
// import covid from "../estimator/estimatedData";
import { FieldContainer } from "./TextFields";
import TabPanel from "./TabPanel";
import PublicIcon from "@material-ui/icons/Public";
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  pub: {
    marginLeft: "2px",
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  app: {
    display: "flex"
  }
}));

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const EstimatedInput: SFC = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [estimatedData, setEstimatedData] = useState<EstimatedData | null>(null)
  const [field, setField] = useState({
    region: "",
    avgDailyIncomeInUSD: "",
    avgDailyIncomePopulation: "",
    periodType: "",
    timeToElapse: "",
    reportedCases: "",
    population: "",
    totalHospitalBeds: ""
  });

  const handleTabChange = (_event: any, newValue: number) => {
    setValue(newValue);
  };

  function showCard(){
    if (estimatedData) {
    const {impact,  severeImpact} = estimatedData;
    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
          <Tabs value={value}  className={classes.title} onChange={handleTabChange} aria-label="simple tabs example">
            <Tab label="Impact Cases" {...a11yProps(0)} />
            <Tab label="Severe Cases" {...a11yProps(1)} />
          </Tabs>
          <IconButton aria-label="world" edge="end" color="inherit">
            <PublicIcon />
          </IconButton>
            <Typography  variant="h6" noWrap >
              {field.region}
            </Typography>
          </Toolbar>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Case data={impact} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Case data={severeImpact} />
        </TabPanel>
      </div>
      ) 
    }
  }

  function handleChange(event:  ChangeEvent<HTMLInputElement>) {
    setField({...field, [event.target.name]: event.target.value});
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = {
      region: {
        name: field.region,
        avgDailyIncomeInUSD: parseInt(field.avgDailyIncomeInUSD),
        avgDailyIncomePopulation: parseInt(field.avgDailyIncomePopulation)
      },
      periodType: field.periodType,
      timeToElapse: parseInt(field.timeToElapse),
      reportedCases: parseInt(field.reportedCases),
      population: parseInt(field.population),
      totalHospitalBeds: parseInt(field.totalHospitalBeds)
    }
    setEstimatedData(covid19ImpactEstimator(data)) 
  }

  console.log("estimated", estimatedData)
  return (
  <div>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6">
          Enter your Covid-19 data Estimator
        </Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <FieldContainer 
        region={field.region}
        avgDailyIncomeInUSD={field.avgDailyIncomeInUSD}
        avgDailyIncomePopulation={field.avgDailyIncomePopulation}
        timeToElapse={field.timeToElapse}
        totalHospitalBeds={field.totalHospitalBeds}
        population={field.population}
        periodType={field.periodType}
        reportedCases={field.reportedCases}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {showCard()}
    </Container>
  </div>
  );
};
