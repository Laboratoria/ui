import React from 'react';
import Button from '@material-ui/core/Button';

const LabButton = (props) => (
    <Button color="secondary">{props.children}</Button>
);

export default LabButton;