import HeaderNav from 'components/containers/HeaderNav';
import IsConsult from 'components/containers/IsConsult';
import RequestCard from 'components/domains/RequestCard';
import FilterButton from 'components/filter/FilterButton';
import ResetButton from 'components/filter/ResetButton';
import React from 'react';
import { useSelector } from 'react-redux';
import store from 'store/store';

type RootState = ReturnType<typeof store.getState>;

function App() {
  const { filteredRequests } = useSelector(
    (state: RootState) => state.requests,
  );
  return (
    <div>
      <HeaderNav />
      <div>
        <div>
          <FilterButton name="가공방식" options={['밀링', '선반']} />
          <FilterButton
            name="재료"
            options={['알루미늄', '탄소강', '구리', '합금강', '강철']}
          />
          <ResetButton />
        </div>
        <div>
          <IsConsult />
        </div>
      </div>
      <div>
        {filteredRequests.map((filteredRequest) => (
          <RequestCard
            key={filteredRequest.id}
            initialState={filteredRequest}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
