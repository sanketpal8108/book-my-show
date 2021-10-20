import React from 'react';
import { Route } from "react-router-dom"

import DefaultLayout from '../layouts/PlaysDefault';

const PlaysHOC = ({ component: Component , ...rest }) => {

    return (
        <>
            <Route

            { ...rest }

            component = {(props) => (

                <DefaultLayout>
                    <Component { ...props} />
                </DefaultLayout>
            )

            }


            />
        </>
    );
};

export default PlaysHOC;
