import { EntityDetail } from './components/EntityDetail/EntityDetail';
import { Entity, EntityDetailFeatureService } from '@poc/services/entity-detail-feature-service';
import { EntityDetailStore } from './components/EntityDetail/EntityDetailStore';
import { Feature } from '@poc/webapp-core';

class EntityDetailFeatureServiceImpl implements EntityDetailFeatureService {

  store = new EntityDetailStore();

  openEntityDetail(entity: Entity): void {
    this.store.setEntity({
      uuid: entity.uuid,
      name: entity.name,
      isRandomized: false,
    })
  }
}

const service = new EntityDetailFeatureServiceImpl();

const feature: Feature<EntityDetailFeatureService> = {
  id: 'entity-detail',
  service,
  Component: () => <EntityDetail store={service.store} />,
}

export default feature;
