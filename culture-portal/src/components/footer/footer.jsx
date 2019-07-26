import React from 'react';
import './footer.css';
import gitIcon from './git.svg';

export default class Footer extends React.Component {
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
    return (
      <div className="teamContainer_wrapper">
        <h3 className="teamContainer_title">Сайт делала команда из:</h3>
        <div className="teamContainer_list">
          {items.length > 0
            && items.map(item => (
              <div className="teamContainer_item">
                <img
                  className="teamContainer_avatar"
                  src={item.avatar}
                  alt="avatar"
                />
                <p className="teamContainer_name">{item.name}</p>
                <p className="teamContainer_nickName">{item.nickName}</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.git}
                  className="teamContainer_gitLink"
                >
                  <img
                    className="teamContainer_gitIcon"
                    src={gitIcon}
                    alt="Github"
                  />
                </a>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
