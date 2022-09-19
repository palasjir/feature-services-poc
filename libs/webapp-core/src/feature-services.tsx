import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { Feature } from './types';

export const featureServicesContext = createContext<Map<string, unknown>>(new Map());
type Props = PropsWithChildren<{ features: Feature[] }>;
export const FeatureServicesProvider: FC<Props> = ({features, children}) => {

  const [map] = useState(() =>
    features.reduce((acc, feature) => acc.set(feature.id, feature.service),
      new Map<string, unknown>()),
  )

  return <featureServicesContext.Provider value={map}>{children}</featureServicesContext.Provider>
}

export function useFeatureService<Service = unknown>(featureId: string): Service {
  const ctx = useContext(featureServicesContext);
  const service = ctx.get(featureId)
  if (!service) {
    throw new Error(`Feature service for feature "${featureId}" is not available.`)
  }
  return service as Service;
}
