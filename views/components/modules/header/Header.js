import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <IndexLink className='header__logo' to='/'>
                    <span className='header__logo_part-one'>The b </span>
                    <span className='header__logo_part-two'>allot </span>
                    <span className='header__logo_part-three'> ox</span>
                </IndexLink>
            </header>
        );
    }
}
