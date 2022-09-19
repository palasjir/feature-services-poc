import { FC } from 'react';

export interface Feature<Service = unknown> {
  id: string;
  Component: FC,
  service?: Service,
}
