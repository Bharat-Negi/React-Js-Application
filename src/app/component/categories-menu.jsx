import React, { useState, useEffect } from 'react';
import categoriesMenuData from '../data-files/categories-menu-data.json';

function CategoriesMenu() {
    return (
        <>
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
                {
                    categoriesMenuData && categoriesMenuData.map(categoriesMenuData => {
                        return (
                            <li className="pb-3" id={categoriesMenuData.id}>
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                                    {categoriesMenuData.cname}
                                    <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul className="collapse show list-unstyled pl-3">
                                    {
                                        categoriesMenuData.csubmenu && categoriesMenuData.csubmenu.map(subData => {
                                            return (                                                
                                                <li id={subData.key}>
                                                    <a className="text-decoration-none" href={subData.clink}>{subData.csubname}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}
export default CategoriesMenu;