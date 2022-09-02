import React from 'react'
import { ProgressBar } from 'react-loader-spinner'

export default function Spinner({type}) {
    return(
            <ProgressBar
            height="120"
            width="500"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{margin: "20"}}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#F4442E'
            barColor = '#51E5FF'
            />
    )    
}
    
