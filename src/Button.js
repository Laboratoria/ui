import React from 'react';
import { Button } from '@material-ui/core';

const LabButton = (props) => (
    <Button color="secondary">{props.children}</Button>
);

export default LabButton;