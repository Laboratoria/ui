const React = require('react');
const Button = require('@material-ui/core/Button');

const LabButton = (props) => (
    <Button color="secondary">{props.children}</Button>
);

module.exports = LabButton;