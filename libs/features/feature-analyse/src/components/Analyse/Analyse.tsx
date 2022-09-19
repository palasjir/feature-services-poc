import { observer } from 'mobx-react';
import styled from 'styled-components';
import { useFeatureService, useIsFeatureRegistered } from '@poc/webapp-core';
import { EntityDetailFeatureService } from '@poc/services/entity-detail-feature-service';
import { AnalyseEntityRepresentation, AnalyseStore } from './AnalyseStore';

const StyledFeaturesFeatureAnalyse = styled.div`
  background: pink;
`;

interface Props {
  store: AnalyseStore;
}

export const Analyse = observer((props: Props) => {
  const {store} = props;
  const {entities} = store;
  const entityDetailService = useFeatureService<EntityDetailFeatureService>('entity-detail');

  const openEntity = (entity: AnalyseEntityRepresentation) => {
    entityDetailService.openEntityDetail({
      uuid: entity.uuid,
      name: entity.name,
    })
  }

  return (
    <StyledFeaturesFeatureAnalyse>
      <h2>Analyse:</h2>
      <ul>
        {entities.map((entity) => <EntityRow entity={entity} onOpen={openEntity}/>)}
      </ul>
    </StyledFeaturesFeatureAnalyse>
  );
})

interface EntityRowProps {
  entity: AnalyseEntityRepresentation;

  onOpen(entity: AnalyseEntityRepresentation): void;
}

function EntityRow({entity, onOpen}: EntityRowProps) {
  const isRegistered = useIsFeatureRegistered('entity-detail');
  return (
    <li>
      <span>{`Name: ${entity.name}`}</span>
      {isRegistered  &&
      <button onClick={() => onOpen(entity)}>
        Open
      </button>}
    </li>)
}


export default Analyse;
