import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {App} from '@poc/webapp-core';
import FeatureAnalyze from '@poc/features/feature-analyse';
import FeatureEntityDetail from '@poc/features/feature-entity-detail';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// portal application defines what features are present
const features = [
  FeatureAnalyze,
  FeatureEntityDetail
];

root.render(
  <StrictMode>
    <App features={features}/>
  </StrictMode>
);
