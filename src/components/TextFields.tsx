import React, {  SFC, FormEvent, ChangeEvent } from "react";
import { TextField, 
  Button, MenuItem, InputLabel, Input, FormHelperText, FormControl,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  form: {
      padding: "5px 14px"
    }
}));

const period = ["days", "weeks", "months"]

interface Props {
  region: string;
  avgDailyIncomeInUSD: string;
  avgDailyIncomePopulation: string;
  periodType: string;
  timeToElapse: string;
  reportedCases: string;
  population: string;
  totalHospitalBeds: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event:  ChangeEvent<HTMLInputElement>) => void;
}

export const FieldContainer: SFC<Props> = ({
  region,
  avgDailyIncomeInUSD,
  avgDailyIncomePopulation,
  periodType,
  timeToElapse,
  reportedCases,
  population,
  totalHospitalBeds,
  handleChange,
  handleSubmit
}: Props) => {
  const classes = useStyles();

  return (
    <div>
      <form  className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <FormControl className={classes.form}>
          <InputLabel className={classes.form}  htmlFor="region">Enter your region</InputLabel>
          <Input 
            id="region" 
            name="region"
            aria-describedby="my-helper-text"
            value={region} 
            type="string"
            onChange={handleChange}
          />
          <FormHelperText id="my-helper-text">region</FormHelperText>
        </FormControl>
        <FormControl className={classes.form} >
          <InputLabel className={classes.form} htmlFor="avgDailyIncomeInUSD">Enter Average DailyIncome</InputLabel>
          <Input 
            id="avgDailyIncomeInUSD" 
            name="avgDailyIncomeInUSD"
            aria-describedby="my-helper-text"
            value={avgDailyIncomeInUSD}
            fullWidth 
            type="number"
            onChange={handleChange}
          />
          <FormHelperText id="my-helper-text">avgDailyIncomeInUSD</FormHelperText>
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel className={classes.form} htmlFor="avgDailyIncomePopulation">Enter Daily Income Popn</InputLabel>
          <Input 
            id="avgDailyIncomePopulation" 
            name="avgDailyIncomePopulation"
            aria-describedby="my-helper-text"
            value={avgDailyIncomePopulation}
            fullWidth 
            type="number"
            onChange={handleChange}
          />
          <FormHelperText id="my-helper-text">avgDailyIncomePopulation</FormHelperText>
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel className={classes.form} htmlFor="population">Enter your Population</InputLabel>
          <Input 
             id="population" 
             name="population"
             aria-describedby="my-helper-text"
             fullWidth 
             value={population}
             data-population={population}
             onChange={handleChange}
             type="number"
          />
          <FormHelperText id="my-helper-text">population</FormHelperText>
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel className={classes.form} htmlFor="reportedCases">Enter your Reported Cases</InputLabel>
          <Input 
            id="reportedCases" 
            name="reportedCases"
            aria-describedby="my-helper-text"
            fullWidth 
            value={reportedCases}
            data-reported-cases={reportedCases}
            onChange={handleChange}
            type="number"
          />
          <FormHelperText id="my-helper-text">reportedCases</FormHelperText>
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel className={classes.form} htmlFor="timeToElapse">Enter your period</InputLabel>
          <Input 
            id="timeToElapse" 
            name="timeToElapse"
            aria-describedby="my-helper-text"
            fullWidth 
            value={timeToElapse}
            data-time-to-elapse={timeToElapse}
            onChange={handleChange}
            type="number"
          />
          <FormHelperText id="my-helper-text">timeToElapse</FormHelperText>
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel className={classes.form} htmlFor="totalHospitalBeds">Enter your hospital Beds</InputLabel>
          <Input 
            id="totalHospitalBeds" 
            name="totalHospitalBeds"
            aria-describedby="my-helper-text"
            fullWidth 
            value={totalHospitalBeds}
            data-total-hospital-beds={totalHospitalBeds}
            onChange={handleChange}
            type="number"
          />
          <FormHelperText id="my-helper-text">totalHospitalBeds</FormHelperText>
        </FormControl>
          <TextField
            id="standard-select-period"
            select
            label="Select"
            value={periodType}
            onChange={handleChange}
            data-period-type={periodType}
            name="periodType"
            helperText="Please select your period"
            margin="normal"
            >
            {period.map( (option, i ) => (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            ))}
        </TextField>
        <Button
          type="submit"
          color="primary"
          size="large"
          variant="contained"
          data-go-estimate={{region, periodType, timeToElapse}}
        >
          Submit
        </Button>
    </form>
  </div>
  );
};
