import { Feature } from '@poc/webapp-core';
import { AnalyseFeatureService, Entity } from '@poc/services/analyse-feature-service';
import { Analyse } from './components/Analyse/Analyse';
import { AnalyseStore } from './components/Analyse/AnalyseStore';

class AnalyseFeatureServiceIml implements AnalyseFeatureService {

  store = new AnalyseStore();

  addEntity(entity: Entity): void {
    this.store.addEntity(entity);
  }
}

const service = new AnalyseFeatureServiceIml();

const feature: Feature<AnalyseFeatureService> = {
  id: 'analyse',
  service,
  Component: () => <Analyse store={service.store} />,
}

export default feature;
