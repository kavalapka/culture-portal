import React from 'react';
import Card from 'react-bootstrap/Card';
import { withTranslation } from 'react-i18next';
import { uniqueId } from 'lodash';
import gitIcon from './git.svg';

class Footer extends React.Component {
  state = {
    items: [
      {
        name: 'Tatyana Hetsman',
        nickName: 'lorabard',
        git: 'https://github.com/LoraBard',
        avatar: 'https://avatars1.githubusercontent.com/u/47930758?s=400&v=4',
      },
      {
        name: 'Kate Zenchik',
        nickName: 'kavalapka',
        git: 'https://github.com/kavalapka',
        avatar: 'https://avatars3.githubusercontent.com/u/16915498?s=460&v=4',
      },
      {
        name: 'Stetckaia Iuliia',
        nickName: 'juliastetskaya',
        git: 'https://github.com/juliastetskaya',
        avatar: 'https://avatars3.githubusercontent.com/u/30536011?s=460&v=4',
      },
      {
        name: 'Dzmitry Ivanou',
        nickName: 'dzmitryi',
        git: 'https://github.com/DzmitryI',
        avatar: 'https://avatars3.githubusercontent.com/u/46649383?s=460&v=4',
      },
      {
        name: 'Fiodar Kaputski',
        nickName: 'feodorius',
        git: 'https://github.com/Feodorius',
        avatar: 'https://avatars2.githubusercontent.com/u/39455164?s=460&v=4',
      },
      {
        name: 'Viktar Hlushchenia',
        nickName: 'slayer110',
        git: 'https://github.com/slayer110',
        avatar: 'https://avatars0.githubusercontent.com/u/29726358?s=460&v=4',
      },
    ],
  };

  render() {
    const { items } = this.state;
    const { t } = this.props;
    return (
      <div className="teamContainer_wrapper">
        <h3 className="teamContainer_title">{t('develop-team')}</h3>
        <div className="teamContainer_list">
          {items.length > 0 && items.map(item => (
            <Card className="teamContainer_item" key={uniqueId()}>
              <Card.Img src={item.avatar} alt="avatar" />
              <Card.Title style={{ fontSize: '.8em' }}>{item.name}</Card.Title>
              <Card.Subtitle style={{ fontSize: '.7em' }}>{item.nickName}</Card.Subtitle>
              <Card.Link target="_blank" rel="noopener noreferrer" href={item.git}>
                <Card.Img id="teamContainer_gitIcon" src={gitIcon} alt="Github" />
              </Card.Link>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default withTranslation()(Footer);
