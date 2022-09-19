export interface Entity {
  uuid: string;
  name: string;
}

export interface EntityDetailFeatureService {
  openEntityDetail(entity: Entity): void;
}
