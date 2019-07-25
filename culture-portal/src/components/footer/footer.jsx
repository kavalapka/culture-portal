import React from 'react';
import "./footer.css";
import gitIcon from './git.svg';

export default class Footer extends React.Component {
    state = {
        items:
            [
                {
                    name: 'Tatyana Hetsman',
                    nickName: 'lorabard',
                    git: 'https://github.com/LoraBard',
                },
                {
                    name: 'Kate Zenchik',
                    nickName: 'kavalapka',
                    git: 'https://github.com/kavalapka',
                },
                {
                    name: 'Stetckaia Iuliia',
                    nickName: 'juliastetskaya',
                    git: 'https://github.com/juliastetskaya',
                },
                {
                    name: 'Dzmitry Ivanou',
                    nickName: 'dzmitryi',
                    git: 'https://github.com/DzmitryI',
                },
                {
                    name: 'Fiodar Kaputski',
                    nickName: 'feodorius',
                    git: 'https://github.com/Feodorius',
                },
                {
                    name: 'Viktar Hlushchenia',
                    nickName: 'slayer110',
                    git: 'https://github.com/slayer110',
                },
            ],
    }
    render() {
        const { items } = this.state;

        return (
            <div className="teamContainer_wrapper">
                <h3 className="teamContainer_title">Сайт делала команда из:</h3>
                <div className="teamContainer_list">
                    {items.length > 0 && items.map(item => (
                        <div className="teamContainer_item">
                            <p className="teamContainer_name">{item.name}</p>
                            <p className="teamContainer_nickName">{item.nickName}</p>
                            <a target="_blank" href={item.git} className="teamContainer_gitLink">
                                <img href="" className="teamContainer_gitIcon" src={gitIcon} alt="Github" /></a>
                        </div>
                    ))}
                </div>
            </div>

        );
    }
}