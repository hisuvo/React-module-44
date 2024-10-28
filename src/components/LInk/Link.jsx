import React from 'react';

const Link = ({ ...link }) => {
    const { id, path, name } = link
    return (
        <li key={id}><a href={path}>{name}</a></li>
    );
};

export default Link;