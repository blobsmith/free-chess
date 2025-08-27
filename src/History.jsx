import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import HistoryLine from "./HistoryLine.jsx";

function History() {
    const dispatch = useDispatch();
    const history = useSelector((state) => (state.history));

  return (
      <div className={'history-container'}>
          <div className={'history-label'}>Game history</div>
          {history.length > 0 ? getMoves(history) : (
              <div className={'history-line'}>
                  <span className={'step-line'}>1.</span>
                  <a className={'step-next-white'}>■</a>
              </div>
          )
          }
      </div>
  )
}

function getMoves(history) {
    let countLine = 1;
    let lines = [];
    let steps = [];
    for (let key in history) {
        steps = history[key];
        let lineLabel = countLine + '.';
        lines.push(<HistoryLine key={lineLabel+key} label={lineLabel} steps={steps} ></HistoryLine>);
        countLine = countLine + 1;
    }
    if (steps[1]) {
        lines.push(<HistoryLine key={countLine+'.dummy'} label={countLine+'.'} steps={[]} ></HistoryLine>);
    }
    return lines;
}

export default History;
