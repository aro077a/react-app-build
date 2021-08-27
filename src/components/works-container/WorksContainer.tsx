import { FC, useEffect, useState } from 'react';

import CardItems from './CardItems';
import WorksHeader from './WorksHeader';

const WorksContainer: FC = () => {
  const [sortLabelName, sortByLabelName] = useState('all');

  useEffect(() => {
    sortByLabelName(sortLabelName);
  }, [sortLabelName]);

  return (
    <div className='worksContainer__Wrapper'>
      <WorksHeader sortByLabelName={sortByLabelName} />
      <CardItems sortLabelName={sortLabelName} />
    </div>
  );
};

export default WorksContainer;
