import getExpectedData, { Data, Estimator } from './impact';
export interface EstimatedData {
  data: Data;
  impact: Estimator;
  severeImpact: Estimator;
}

function covid19ImpactEstimator(data: Data): EstimatedData  {
  return {
    data,
    impact: getExpectedData(data, 10),
    severeImpact: getExpectedData(data, 50)
  }
};

export default covid19ImpactEstimator;
