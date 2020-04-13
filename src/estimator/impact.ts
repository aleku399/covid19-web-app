import getDays from './normalise';

export interface Region {
  name: string;
  avgAge?: number;
  avgDailyIncomeInUSD: number;
  avgDailyIncomePopulation: number; 
}

export interface Data {
  region: Region;
  periodType: string;
  timeToElapse: number;
  reportedCases: number;
  population: number;
  totalHospitalBeds: number; 
}

export interface Estimator {
  currentlyInfected: number
  infectionsByRequestedTime: number;
  severeCasesByRequestedTime: number;
  hospitalBedsByRequestedTime: number;
  casesForICUByRequestedTime: number;
  casesForVentilatorsByRequestedTime: number;
  dollarsInFlight: number;
}

function getImpact(data: Data): Estimator {
  const days = getDays(data.periodType, data.timeToElapse);
  const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = data.region;
  const currentlyInfected = data.reportedCases * 10;
  const factor = Math.floor(days / 3);
  const infectionsByRequestedTime = Math.floor(currentlyInfected * (2 ** factor));
  const severeCasesByRequestedTime = Math.floor(0.15 * infectionsByRequestedTime);
  const availableBeds = Math.floor(0.35 * data.totalHospitalBeds);
  const hospitalBedsByRequestedTime = availableBeds - severeCasesByRequestedTime;
  const casesForICUByRequestedTime = Math.floor(0.05 * infectionsByRequestedTime);
  const casesForVentilatorsByRequestedTime = Math.floor(0.02 * infectionsByRequestedTime);
  const affectedPopn = infectionsByRequestedTime * avgDailyIncomePopulation;
  console.log("popn", affectedPopn);
  const dollarsInFlight = parseFloat((affectedPopn * days * avgDailyIncomeInUSD).toFixed(2));
  console.log("dollar", dollarsInFlight);
  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
}

export default getImpact;
