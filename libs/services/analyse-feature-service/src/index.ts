export interface Entity {
  uuid: string;
  name: string;
}

export interface AnalyseFeatureService {
  addEntity(entity: Entity): void;
}
