import styled from 'styled-components';
import { AnalyseFeatureService } from '@poc/services/analyse-feature-service';
import { EntityDetailStore } from './EntityDetailStore';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useFeatureService } from '../../../../../webapp-core/src/feature-services';


const StyledFeaturesFeatureEntityDetail = styled.div`
  background: lightblue;
`;

interface Props {
  readonly store: EntityDetailStore;
}

export const EntityDetail = observer((props: Props) => {
  const {store} = props;

  const analyseFeatureService = useFeatureService<AnalyseFeatureService>('analyse');
  useEffect(() => {
    store.inject({ analyseFeatureService })
  }, [])

  return (
    <EntityDetailInner store={store}/>
  );
})

const EntityDetailInner = observer((props: Props) => {
  const {store} = props;

  return (
    <StyledFeaturesFeatureEntityDetail>
      <h2>Entity Detail:</h2>
      <pre>
        {JSON.stringify(store.entity, null, '\t')}
      </pre>
      <button onClick={store.randomize}>Randomize entity</button>
      <button onClick={store.addCurrentEntityToAnalyse}>Add current entity</button>
    </StyledFeaturesFeatureEntityDetail>
  );
});


export default EntityDetail;
