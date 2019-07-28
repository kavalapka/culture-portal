import React from 'react';
import i18n from 'i18next';
import { uniqueId } from 'lodash';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import jsonEN from '../../assets/i18n/en.json';
import jsonBE from '../../assets/i18n/be.json';
import jsonRU from '../../assets/i18n/ru.json';

const TimeLine = () => {
  let authorsLang;
  switch (i18n.language) {
    case 'ru':
      authorsLang = jsonRU.authors;
      break;
    case 'be':
      authorsLang = jsonBE.authors;
      break;
    case 'en':
      authorsLang = jsonEN.authors;
      break;
    default:
      authorsLang = jsonRU.authors;
      break;
  }
  const id = 1;
  const { activity } = authorsLang.filter(el => el.id === id)[0];
  const result = Object.keys(activity).map(key => [key, activity[key]]).sort();
  return (
    <div className="timeline_wrapper">
      <h3>Временная линия:</h3>
      <Timeline lineStyle={{ background: '#A07092', width: 3 }}>
        {result.map(el => (
          <TimelineEvent
            key={uniqueId()}
            title={el[0]}
            titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
            icon={<i className="material-icons md-18">event</i>}
            iconStyle={{ marginLeft: 0, marginTop: 2 }}
            iconColor="#A07092"
            bubbleStyle={{ width: 35, height: 35 }}
          >
            {el[1]}
          </TimelineEvent>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
