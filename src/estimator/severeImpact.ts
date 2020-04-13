import getDays from './normalise';
import { Estimator, Data } from './impact';

function getSevereImpact(data: Data): Estimator {
  const days = getDays(data.periodType, data.timeToElapse);
  const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = data.region;
  const currentlyInfected = data.reportedCases * 50;
  const factor = Math.floor(days / 3);
  const infectionsByRequestedTime = Math.floor(currentlyInfected * (2 ** factor));
  const severeCasesByRequestedTime = Math.floor(0.15 * infectionsByRequestedTime);
  const availableBeds = Math.floor(0.35 * data.totalHospitalBeds);
  const hospitalBedsByRequestedTime = availableBeds - severeCasesByRequestedTime;
  const casesForICUByRequestedTime = Math.floor(0.05 * infectionsByRequestedTime);
  const casesForVentilatorsByRequestedTime = Math.floor(0.02 * infectionsByRequestedTime);
  const affectedPopn = infectionsByRequestedTime * avgDailyIncomePopulation;
  const dollarsInFlight = parseFloat((affectedPopn * days * avgDailyIncomeInUSD).toFixed(2));

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

export default getSevereImpact;
