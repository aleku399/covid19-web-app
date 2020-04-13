import React, {  SFC, FormEvent, ChangeEvent } from "react";
import { TextField, 
  Button, MenuItem,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  app: {
    display: "flex"
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
          <TextField
            fullWidth
            label="Enter your region"
            type="string"
            margin="normal"
            variant="outlined"
            name="region"
            value={region}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Enter your Daily Income"
            type="number"
            margin="normal"
            variant="outlined"
            name="avgDailyIncomeInUSD"
            value={avgDailyIncomeInUSD}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Enter your Income Popn"
            type="number"
            margin="normal"
            variant="outlined"
            name="avgDailyIncomePopulation"
            value={avgDailyIncomePopulation}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Enter your Population"
            type="number"
            margin="normal"
            variant="outlined"
            name="population"
            value={population}
            onChange={handleChange}
          />
        <TextField
            fullWidth
            label="Enter your reported Cases"
            type="number"
            margin="normal"
            variant="outlined"
            name="reportedCases"
            value={reportedCases}
            onChange={handleChange}
          />
        <TextField
            fullWidth
            label="Enter your period"
            type="number"
            margin="normal"
            variant="outlined"
            name="timeToElapse"
            value={timeToElapse}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Enter your hospital Beds"
            type="number"
            margin="normal"
            variant="outlined"
            name="totalHospitalBeds"
            value={totalHospitalBeds}
            onChange={handleChange}
          />
          <TextField
          id="standard-select-period"
          select
          label="Select"
          value={periodType}
          onChange={handleChange}
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
      >
        Submit
      </Button>
    </form>
  </div>
  );
};
