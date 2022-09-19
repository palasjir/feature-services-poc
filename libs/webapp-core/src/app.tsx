import styled from 'styled-components';
import { FeatureServicesProvider } from './feature-services';
import { Feature } from './types';

const StyledApp = styled.div`
  // Your style here
`;


export interface AppProps {
  features: Feature[];
}

export function App({features}: AppProps) {
  return (
    <StyledApp>
      <FeatureServicesProvider features={features}>
        {features.map(({Component}) => {
          return <Component/>
        })}
      </FeatureServicesProvider>
    </StyledApp>
  );
}
