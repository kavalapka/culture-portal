import React from 'react';
import { uniqueId } from 'lodash';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { useTranslation } from 'react-i18next';

const TimeLine = (props) => {
  const { t } = useTranslation();
  const { activity } = props;
  return (
    <div className="timeline_wrapper">
      <h3 className="timeline_title">{t('timeline')}</h3>
      <Timeline lineColor="#38292F">
        {activity.map(el => (
          <TimelineItem
            key={uniqueId()}
            dateText={el.date}
            dateInnerStyle={{
              background: '#38292F',
              color: '#FFF',
            }}
            bodyContainerStyle={{
              textAlign: 'left',
              color: '#000',
            }}
          >
            {el.description}
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
