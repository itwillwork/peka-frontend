import React, {Component} from 'react';

import styles from './SearchPage.scss';
import classNames from 'classnames/bind';
const cls = classNames.bind(styles);

import { connect } from 'react-redux';
import { getUser } from '../../redux/user/actions';

class SearchPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('componentDidMount', this.props);
        //todo fetch user info
        this.props.dispatch(getUser());
    }
    render() {
        return (
                <div className={cls("container")}>
                    <div className={cls("menu")}>
                        компонент меню
                    </div>
                    <div className={cls("container__content")}>
                        <div className={cls("container__crutch")}>
                            <div className={cls("container__center-box")}>
                                основоное содержимое
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default connect()(SearchPage)