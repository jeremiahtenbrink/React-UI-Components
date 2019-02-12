import React from 'react';

const ActionButton = ( {action, fun} ) => {
    return (
        <div className="action-button" onClick={() => fun(action)}>{action}</div>
    );
};


export default ActionButton;