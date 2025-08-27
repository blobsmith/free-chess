import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';

function HistoryLine({label, steps}) {
    const dispatch = useDispatch();
    return (
        <div className={'history-line'}>
            <span className={'step-line'}>{label}</span>
            {getWhiteStep(steps)}
            {getBlackStep(steps)}
        </div>
    )
}

function getWhiteStep(steps){
    let whiteStep = <a className={'step-next-white'}>■</a>;
    if (steps[0] !== undefined) {
        whiteStep = <a className={'step-white'}>{steps[0].move}</a>;
    }
    return whiteStep;
}

function getBlackStep(steps){
    let blackStep = <a className={'step-next-black'}>■</a>;
    if (steps[1] !== undefined) {
        blackStep = <a className={'step-black'}>{steps[1].move}</a>;
    }
    if (steps[0] === undefined) {
        blackStep = '';
    }
    return blackStep;
}

export default HistoryLine;
