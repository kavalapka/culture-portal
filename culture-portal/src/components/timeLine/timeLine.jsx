import React from 'react';
import { uniqueId } from 'lodash';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { useTranslation } from 'react-i18next';

const TimeLine = () => {
  const id = 0;
  const { t } = useTranslation();
  const activity = t(`authors.${id}.activity`, { returnObjects: true });
  const result = Object.keys(activity).map(key => [key, activity[key]]).sort();
  return (
    <div className="timeline_wrapper">
      <h3 className="timeline_title">{t('timeline')}</h3>
      <Timeline lineColor="#40589A">
        {result.map(el => (
          <TimelineItem
            key={uniqueId()}
            dateText={el[0]}
            dateInnerStyle={{
              background: '#40589A',
              color: '#FFF',
            }}
            bodyContainerStyle={{
              textAlign: 'left',
              color: '#000',
            }}
          >
            {el[1]}
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
