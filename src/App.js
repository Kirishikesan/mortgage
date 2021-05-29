import React, { useState, useEffect } from 'react';
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Switch from '@material-ui/core/Switch';

import { useSpeechSynthesis } from 'react-speech-kit';
import { useSpeechRecognition } from 'react-speech-kit';

import './App.css';

import Table from './Table';
import Chart from './Chart';
import calculate from './calculations';

const defaultOverpayment = {month: '1', year: '0', amount: '0'};

export default () => {
    const [openAmountTip, setOpenAmountTip] = React.useState(false);
    const [openYearsTip, setOpenYearsTip] = React.useState(false);
    const [openRateTip, setOpenRateTip] = React.useState(false);
    const [openMonthlyTip, setOpenMonthlyTip] = React.useState(false);
    const [openSinglePayTip, setOpenSinglePayTip] = React.useState(false);

    const [initial, setInitial] = useState('200000');
    const [rate, setRate] = useState('5');
    const [years, setYears] = useState('25');
    const [monthlyOverpayment, setMonthlyOverpayment] = useState('0');
    const [overpayments, setOverpayments] = useState([defaultOverpayment]);

    const updateOverpayment = index => ({target}) =>
        setOverpayments(
            overpayments.map((overpayment, i) =>
                i === index
                    ? {...overpayment, [target.name]: target.value}
                    : overpayment
            )
        );

    const {monthlyPayment, payments} = calculate(
        +initial,
        +years,
        +rate,
        +monthlyOverpayment,
        overpayments
    );

    // switch state
    const [state, setState] = useState({
        checked: false
      }); 
      
    const [inputFieldNumber, setInputFieldNumber] = useState('0');
    const [speakNumber, setSpeakNumber] = useState(0);

    //speech synthesis
    const { speak } = useSpeechSynthesis();

    // speech recognition
    const [valueListen, setValueListen] = useState('');
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            console.log(result);
            if (!isNaN(result) ) {
                setValueListen(result);
            }   
        },

        onEnd: () => {
            setTimeout(() => {
                setSpeakNumber(speakNumber + 1);
            }, 1000)           
        }
    });

    // on updating checked state
    useEffect(() => {
        if (state.checked) {
            setSpeakNumber(speakNumber +1); 
        }
        if (!state.checked) {
            setSpeakNumber(0); 
            setInputFieldNumber('0');
            setValueListen('');
        }
    }, [state]);

    // on updating speak number, speak
    useEffect( () => {
        if (speakNumber === 1) {
            speak( {text:"Please state your initial amount"} );
            setInputFieldNumber('1'); 
        } else if (speakNumber === 2) {
            speak( {text:"Please state the mortgage term"} );
            setInputFieldNumber('2');
        } else if (speakNumber === 3) {
            speak( {text:"Please state the interest rate"} );
            setInputFieldNumber('3');
        } else if (speakNumber === 4) {
            speak( {text:"Please state the regular monthly overpayment, if any"} );
            setInputFieldNumber('4');
        } else if (speakNumber === 5) {
            speak( {text:"Your monthly payment is " + (+monthlyOverpayment + monthlyPayment).toFixed(2)} );
            setState({ ...state, checked: false }); 
        }
    }, [speakNumber]);

    // on updating input field number, start listening and stop in 10 secs
    useEffect( () => {
        if (inputFieldNumber !== '0') {
            listen();
            setTimeout(() => {
                stop(); 
            }, 10000)
        }
    }, [inputFieldNumber]);

    // on updating listen value, set input fields
    useEffect( () => {
        if (inputFieldNumber === '1') {
            setInitial(parseFloat(valueListen.replace(/,/g, ''))); 
        } else if (inputFieldNumber === '2') {
            setYears(parseFloat(valueListen.replace(/,/g, ''))); 
        } else if (inputFieldNumber === '3') {
            setRate(parseFloat(valueListen.replace(/,/g, ''))); 
        } else if (inputFieldNumber === '4') {
            setMonthlyOverpayment(parseFloat(valueListen.replace(/,/g, ''))); 
        } 
    }, [valueListen]);

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleChangeDoubleClick = () => {
        setState({ ...state, checked: true });
    };

    useEffect( () => {
        speak( {text:"You may double click anywhere on the screen to activate voice mode"} );
    }, []);

    return (
        <div onDoubleClick={handleChangeDoubleClick}>
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <div className="navbar-brand" style={{fontFamily: 'Arial', fontSize: 25}}>
                        Mortgage Overpayment Calculator
                    </div>
                </div>
                <div>
                <Switch
                    checked={state.checked}
                    onChange={handleChange}
                    name="checked"
                />
                {listening && <div>Go ahead I'm listening</div>}
                </div>
            </nav>
            <div className="container-fluid">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3>Initial</h3>
                                </div>    
                                <div className="panel-body">
                                    <Tooltip title={<h6>Mortgage debt</h6>}>
                                        <label>
                                            <AttachMoneyIcon className= {'material-icons'} />
                                            Amount
                                        </label>
                                    </Tooltip>
                                    <input
                                    type="number"
                                    maxLength={7}
                                    value={initial}
                                    onChange={e => {
                                        e.target.value = !!e.target.value && Math.abs(e.target.value) >= 0 ? Math.abs(e.target.value) : null;
                                        setInitial(e.target.value)
                                    }}
                                /> 
                                <ClickAwayListener onClickAway={() => setOpenAmountTip(false)}>                             
                                    <Tooltip
                                        PopperProps={{
                                        disablePortal: true,
                                        }}
                                        onClose={() => setOpenAmountTip(false)}
                                        open={openAmountTip}
                                        disableFocusListener
                                        disableHoverListener
                                        disableTouchListener
                                        title={<h6>This is the total amount you owe</h6>}>
                                        <HelpIcon className= {'help-icon'} onClick={() => setOpenAmountTip(true)}/>
                                    </Tooltip>                      
                                </ClickAwayListener>   
                                </div>
                                <div className="panel-body">
                                    <Tooltip title={<h6>Mortgage term</h6>}>
                                        <label>

                                            {/* <EventIcon className= {'material-icons'} /> */}
                                            &nbsp;&nbsp;&nbsp;&nbsp;Years

                                        </label>
                                    </Tooltip>
                                        
                                    <input
                                    //style={{width: "80px"}}
                                    //placeholder="Required"
                                    type="number"
                                    maxLength={2}
                                    value={years}
                                    onChange={e => {
                                        e.target.value = !!e.target.value && Math.abs(e.target.value) >= 0 ? Math.abs(e.target.value) : null;
                                        setYears(e.target.value)
                                    }}
                                    />
                                    <ClickAwayListener onClickAway={() => setOpenYearsTip(false)}>                             
                                        <Tooltip
                                            PopperProps={{
                                            disablePortal: true,
                                            }}
                                            onClose={() => setOpenYearsTip(false)}
                                            open={openYearsTip}
                                            disableFocusListener
                                            disableHoverListener
                                            disableTouchListener
                                            title={<h6>This is the number of years over which you are repaying your mortgage</h6>}>
                                            <HelpIcon className= {'help-icon'} onClick={() => setOpenYearsTip(true)}/>
                                        </Tooltip>                      
                                    </ClickAwayListener>
                                </div>
                                <div className="panel-body" >

                                    <Tooltip title={<h6>Interest rate</h6>}>
                                        <label> <span className='percentage'>% </span>Rate</label>
                                    </Tooltip>

                                    <input
                                        //style={{width: "80px"}}
                                        //placeholder="Required"
                                        type="number"
                                        step={0.1}
                                        value={rate}
                                        onChange={e => {
                                            e.target.value = !!e.target.value && Math.abs(e.target.value) >= 0 ? Math.abs(e.target.value) : null;
                                            setRate(e.target.value)
                                        }}
                                    />
                                    <ClickAwayListener onClickAway={() => setOpenRateTip(false)}>                             
                                        <Tooltip
                                            PopperProps={{
                                            disablePortal: true,
                                            }}
                                            onClose={() => setOpenRateTip(false)}
                                            open={openRateTip}
                                            disableFocusListener
                                            disableHoverListener
                                            disableTouchListener
                                            title={<h6>This is the annual mortgage interest rate</h6>}>
                                            <HelpIcon className= {'help-icon'} onClick={() => setOpenRateTip(true)}/>
                                        </Tooltip>                      
                                    </ClickAwayListener>
                                </div>

                            </div>                              
                        
                            <div className="panel panel-default">
                                <div className="panel-heading" >
                            <h3>Overpayment</h3>
                                 </div>
                                <div className="panel-body"><Tooltip title={<h6>Regular monthly overpayment</h6>}>
                                    <label>Monthly</label>
                                </Tooltip>                           
                                <input
                                    type="number"
                                    maxLength={5}
                                    value={monthlyOverpayment}
                                    onChange={e => {
                                        e.target.value = !!e.target.value && Math.abs(e.target.value) >= 0 ? Math.abs(e.target.value) : null;
                                        setMonthlyOverpayment(e.target.value)
                                    }}
                                />
                                <ClickAwayListener onClickAway={() => setOpenMonthlyTip(false)}>                             
                                <Tooltip
                                    PopperProps={{
                                    disablePortal: true,
                                    }}
                                    onClose={() => setOpenMonthlyTip(false)}
                                    open={openMonthlyTip}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title={<h6>This is the regular monthly overpayment made on top of your normal monthly payment</h6>}>
                                    <HelpIcon className= {'help-icon'} onClick={() => setOpenMonthlyTip(true)}/>
                                </Tooltip>                      
                            </ClickAwayListener>
                           </div>
                            <div className="panel-body">
                        <label>Year</label>
                        <label>Month</label>
                        <Tooltip title={<h6>Lump sum overpayment</h6>}>                                                  
                            <label>
                                <AttachMoneyIcon className= {'material-icons'} />
                                Amount
                            </label>
                        </Tooltip>
                            <ClickAwayListener onClickAway={() => setOpenSinglePayTip(false)}>                             
                                <Tooltip
                                    PopperProps={{
                                    disablePortal: true,
                                    }}
                                    onClose={() => setOpenSinglePayTip(false)}
                                    open={openSinglePayTip}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title={<h6>This is the one-off lump sum overpayment (single payment done only once) made during the specified year and month</h6>}>
                                    <HelpIcon className= {'material-icons'} onClick={() => setOpenSinglePayTip(true)}/>
                                </Tooltip>                      
                            </ClickAwayListener>
                        {overpayments.map(({year, month, amount}, i) => (
                            <div key={i}>
                                <input
                                    type="number"
                                    min="0"
                                    max={years}
                                    value={!!year && Math.abs(year) >= 0 ? Math.abs(parseInt(year)) : null}
                                    name="year"
                                    onChange={updateOverpayment(i)}
                                />
                                <input
                                    type="number"
                                    min="1"
                                    max="12"
                                    value={!!month && Math.abs(month) >= 0 ? Math.max(1, Math.min(12, Math.abs(parseInt(month)))) : null}
                                    name="month"
                                    onChange={updateOverpayment(i)}
                                />
                                <input
                                    type="number"
                                    value={!!amount && Math.abs(amount) >= 0 ? Math.abs(amount) : null}
                                    name="amount"
                                    onChange={updateOverpayment(i)}
                                />

                                {i === overpayments.length - 1 ? (
                                    <IconButton  color="secondary" variant="outlined"
                                                 onClick={() =>
                                                     setOverpayments([...overpayments, defaultOverpayment])
                                                 }>
                                        <AddIcon />
                                    </IconButton>
                                ) : (
                                    <IconButton  color="secondary" variant="outlined"
                                                 onClick={() =>
                                                     setOverpayments(overpayments.filter((_, j) => j !== i))
                                                 }>
                                        <DeleteIcon />
                                    </IconButton>
                                )}
                            </div>
                        ))}
                            </div>
                            </div>

                    </div>
                    
                    <div className="col-sm-5 col-md-5 col-lg-5">
                        <h3>
                            Monthly Payment
                            <span className="money">
                                {(+monthlyOverpayment + monthlyPayment).toFixed(2)}
                            </span>
                        </h3>
                        <Chart payments={payments}/>
                    </div>
                <Table className="col-sm-3 col-md-3 col-lg-3" payments={payments}/>
            </div>
        </div>
    );
};
