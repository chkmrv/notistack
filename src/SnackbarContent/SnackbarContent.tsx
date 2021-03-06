import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            flexGrow: 'initial',
            minWidth: 288,
        },
    }
});

export interface SnackbarContent extends WithStyles<typeof styles>, React.HTMLAttributes<HTMLDivElement> { }

const SnackbarContent: React.FC<SnackbarContent> = forwardRef<HTMLDivElement, SnackbarContent>(({ classes, className, ...props }, ref) => (
    <div ref={ref} className={clsx(classes.root, className)}  {...props} />
))

export default withStyles(styles)(SnackbarContent);
