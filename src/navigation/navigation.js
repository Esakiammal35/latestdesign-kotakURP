import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import classNames from 'classnames';
import styles from './appStyles-jss';
import Login from '../containers/login/login';
import Dashboard from '../containers/dashboard/dashboard';
import Layout from '../layout/layout';

function Navigation(props) {
    return (
        <Routes>
           <Route path="/" element={<Login></Login>} />
           <Route path={"/dashboard"} element={doSomething(props, <Dashboard />)} />
        </Routes>
    )
}
export default withStyles(styles)(Navigation)


const doSomething = (props, component) => {
    const { classes } = props;
    return (
        <>
            <Layout {...props}>
            {component}
            </Layout>
        </>
    )
};

