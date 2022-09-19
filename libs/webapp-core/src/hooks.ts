import { useContext } from 'react';
import { featureServicesContext } from './feature-services';

export function useIsFeatureRegistered(featureId: string): boolean {
  const ctx = useContext(featureServicesContext);
  const service = ctx.get(featureId);
  return Boolean(service);
}
