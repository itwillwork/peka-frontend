import React, {Component} from 'react';

import styles from './IndexPage.scss';
import classNames from 'classnames/bind';
const cls = classNames.bind(styles);

class IndexPage extends Component{
    render() {
        return (
            <div className={cls("container")}>
                <div className={cls("container__left-box")}>
                        lol kek <br />
                    kek <br />
                    lol  <br />
                    lol kek <br />
                    lol  <br />
                    kek <br />
                    lol kek <br />
                    lol kek <br />
                    lol  <br />
                    kek <br />
                    lol kek <br />

                </div>
            </div>
        );
    }
}

export default IndexPage