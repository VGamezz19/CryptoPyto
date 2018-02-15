import React, {
    Component
} from 'react';

export default function LoaderNiesto() {
    // return (<td class="progress">
    //     <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    // </td>
    return (

        // <td class="loader progressLoad">
        //     <div class="loader__bar"></div>
        //     <div class="loader__bar"></div>
        //     <div class="loader__bar"></div>
        //     <div class="loader__bar"></div>
        //     <div class="loader__bar"></div>
        //     <div class="loader__ball"></div>
        // </td>

        <td class="cs-loader progressLoad">
            <div class="cs-loader-inner">
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
            </div>
        </td>
    )
}