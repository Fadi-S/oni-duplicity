import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    root: {
        display: 'inline-block',
        position: 'relative',
    },
});

export interface DuplicantContainerProps {
    children?: React.ReactNode;
}

const DuplicantContainer: React.FC<DuplicantContainerProps> = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>;
};

export default DuplicantContainer;
