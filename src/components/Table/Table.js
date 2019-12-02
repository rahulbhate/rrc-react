import React from 'react';
import PropTypes from 'prop-types';

function Table({ width, }){
    return(    
        <table>
        <thead>
            <tr>
            <th> Loop Through Keys</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
            <th>Loop Through Keys</th>
            <th>Instrument</th>
            </tr>
        </tfoot>
        <tbody>
            <tr>
            <td>Loop Through Values</td>
            </tr>
        </tbody>
    </table>
    );
}
Table.PropTypes = {

}
Table.defaultProps = {

}
export default Table;