import { makeAutoObservable } from 'mobx';

export interface AnalyseEntityRepresentation {
  uuid: string;
  name: string;
}
export class AnalyseStore {

  entitiesMap = new Map<string, AnalyseEntityRepresentation>();

  constructor() {
    makeAutoObservable(this);
  }

  get entities():AnalyseEntityRepresentation[] {
    return [...this.entitiesMap.values()];
  }

  addEntity = (entity: AnalyseEntityRepresentation) => {
    if(this.entitiesMap.has(entity.uuid)) return;
    this.entitiesMap.set(entity.uuid, entity);
  };

}
