import React from 'react';
const Error = ({mensaje}) => {
    return(
<div className="card-pnel red darken-4 error col s12">
{mensaje}
</div>
    )
}
export default Error;