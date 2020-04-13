import getImpact, { Data, Estimator } from './impact';
import getSevereImpact from './severeImpact';

export interface EstimatedData {
  data: Data;
  impact: Estimator;
  severeImpact: Estimator;
}

const covid19ImpactEstimator = (data: Data): EstimatedData => (
  {
    data,
    impact: getImpact(data),
    severeImpact: getSevereImpact(data)
  }
);

export default covid19ImpactEstimator;
