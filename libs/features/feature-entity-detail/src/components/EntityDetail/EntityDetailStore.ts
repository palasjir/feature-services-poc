import { faker } from '@faker-js/faker';
import { AnalyseFeatureService } from '@poc/services/analyse-feature-service';
import { makeAutoObservable } from 'mobx';

interface EntityDetailRepresentation {
  uuid: string;
  name: string;
  isRandomized: boolean;
}

interface Dependencies {
  analyseFeatureService?: AnalyseFeatureService;
}

export class EntityDetailStore {

  entity: EntityDetailRepresentation;
  analyseFeatureService?: AnalyseFeatureService;

  constructor() {
    this.entity = createRandomEntity();
    makeAutoObservable(this, {analyseFeatureService: false});
  }

  inject = (dependencies: Dependencies) => {
    this.analyseFeatureService = dependencies.analyseFeatureService;
  }

  setEntity = (entity: EntityDetailRepresentation) => {
    this.entity = entity;
  };

  randomize = () => {
    this.entity = createRandomEntity();
  }

  addCurrentEntityToAnalyse = () => {
    if(this.analyseFeatureService) {
      const entity = this.entity;
      this.analyseFeatureService.addEntity({
        name: entity.name,
        uuid: entity.uuid,
      });
    }
  }

}

function createRandomEntity() {
  return {
    uuid: faker.random.alpha(20),
    name: faker.name.firstName(),
    isRandomized: true,
  }
}
