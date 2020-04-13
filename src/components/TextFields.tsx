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
            label="Enter Average Daily Income"
            type="number"
            margin="normal"
            variant="outlined"
            name="avgDailyIncomeInUSD"
            value={avgDailyIncomeInUSD}
            onChange={handleChange}
            helperText="Enter avgDailyIncomeInUSD"
          />
          <TextField
            fullWidth
            label="Enter Daily Income Popn"
            type="number"
            margin="normal"
            variant="outlined"
            name="avgDailyIncomePopulation"
            value={avgDailyIncomePopulation}
            onChange={handleChange}
            helperText="Enter avgDailyIncomePopulation"
          />
          <TextField
            fullWidth
            label="Enter your Population"
            type="number"
            margin="normal"
            variant="outlined"
            name="population"
            value={population}
            data-population={population}
            onChange={handleChange}
            helperText="Enter population"
          />
        <TextField
            fullWidth
            label="Enter your reported Cases"
            type="number"
            margin="normal"
            variant="outlined"
            name="reportedCases"
            value={reportedCases}
            data-reported-cases={reportedCases}
            onChange={handleChange}
            helperText="Enter reportedCases"
          />
        <TextField
            fullWidth
            label="Enter your period"
            type="number"
            margin="normal"
            variant="outlined"
            name="timeToElapse"
            value={timeToElapse}
            data-time-to-elapse={timeToElapse}
            onChange={handleChange}
            helperText="Enter timeToElapse"
          />
          <TextField
            fullWidth
            label="Enter your hospital Beds"
            type="number"
            margin="normal"
            variant="outlined"
            name="totalHospitalBeds"
            value={totalHospitalBeds}
            data-total-hospital-beds={totalHospitalBeds}
            onChange={handleChange}
            helperText="Enter totalHospitalBeds"
          />
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
