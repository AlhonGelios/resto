import React from 'react';
import './menu-list-item.scss';

import salad from './salad.png'
import meat from './meat.png'
import pizza from './pizza.png'

const MenuListItem = ({menuItem}) => {
    const {title, price, url, category} = menuItem;

    let iconUrl = '';

    switch (category) {
        case 'salads' :
            iconUrl = salad;
            break;

        case 'meat' :
            iconUrl = meat;
            break;

        case 'pizza' :
            iconUrl = pizza;
            break;

        default:
    }

    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__icon" src={iconUrl} alt={category}></img>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button className="menu__btn">Add to cart</button>
        </li>
    )
}

export default MenuListItem;