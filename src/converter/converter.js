import React, { useEffect, useState } from 'react';
import './converter.css'
import cockpit from '../img/cockpit.jpg';

function Converter() {
    //img faster load
    useEffect((cockpit) => {
        const imageList = [cockpit];
        imageList.forEach((image) => {
            new Image().src = image
        })
    }, []);

    //Wind
    const [mps, setMps] = useState('');
    const [kts, setKts] = useState('');
    const [kmph, setkmph] = useState('');


    const calcMps = () => {
        const mpsToKt = mps * 1.94;
        const mpsToKm = mps * 3.6;
        if(mpsToKt < 0 || mpsToKt > 100000 || mpsToKm < 0 || mpsToKm > 100000) {
            clearWind()
            alert("Invalid data")
        } else {
        setKts(mpsToKt.toFixed(2));
        setkmph(mpsToKm.toFixed(2));
        }
    }

    const calcKts = () => {
        const ktsTomps = kts * 0.515;
        const ktsTokm = kts * 1.852;
        if(ktsTomps < 0 || ktsTomps > 100000 || ktsTokm < 0 || ktsTokm > 100000) {
            clearWind()
            alert("Invalid data")
        } else {
            setMps(ktsTomps.toFixed(2));
            setkmph(ktsTokm.toFixed(2));
        }
    }

    const calckmph = () => {
        const kmphTomps = kmph * 0.2777;
        const kmphTokts = kmph * 0.5399;
        if(kmphTomps < 0 || kmphTomps > 100000 || kmphTokts < 0 || kmphTokts > 100000) {
            clearWind()
            alert("Invalid data")
        } else {
            setMps(kmphTomps.toFixed(2));
            setKts(kmphTokts.toFixed(2));
        }
    }

    const clearWind = () => {
        setMps('')
        setKts('')
        setkmph('')
    }

    //Pressure
    const [hPa, sethPa] = useState('');
    const [mmHg, setmmHg] = useState('');
    const [inHg, setinHg] = useState('');

    const calchPa = () => {
        const hPaTommHg = hPa * 0.7501;
        const hPaToinHg = hPa * 0.0295;
        if(hPaTommHg < 0 || hPaTommHg > 100000 || hPaToinHg < 0 || hPaToinHg > 100000) {
            clearPressure()
            alert("Invalid data")
        } else {
            setmmHg(hPaTommHg.toFixed(2));
            setinHg(hPaToinHg.toFixed(2));
        }
    }

    const clacmmHg = () => {
        const mmHgTohPa = mmHg * 1.3331;
        const mmHgToinHg = mmHg * 0.0393;
        if(mmHgTohPa < 0 || mmHgTohPa > 100000 || mmHgToinHg < 0 || mmHgToinHg > 100000) {
            clearPressure()
            alert("Invalid data")
        } else {
            sethPa(mmHgTohPa.toFixed(2));
            setinHg(mmHgToinHg.toFixed(2));
        }
    }

    const clacinHg = () => {
        const inHgTohPa = inHg * 33.8983;
        const inHgTommHg = inHg * 25.4452;
        if(inHgTohPa < 0 || inHgTohPa > 100000 || inHgTommHg < 0 || inHgTommHg > 100000) {
            clearPressure()
            alert("Invalid data")
        } else {
            sethPa(inHgTohPa.toFixed(2));
            setmmHg(inHgTommHg.toFixed(2));
        }
    }

    const clearPressure = () => {
        sethPa('')
        setinHg('')
        setmmHg('')
    }

    //Distance
    const [ft, setft] = useState('');
    const [m, setm] = useState('');
    const [NM, setNM] = useState('');
    const [km, setkm] = useState('');

    const calcft = () => {
        const ftTom = ft * 0.3048;
        const ftToNM = ft * 0.00016457;
        const ftTokm = ft * 0.0003048;
        if(ftTom < 0 || ftTom > 100000000 || ftToNM < 0 || ftToNM > 100000000 || ftTokm < 0 || ftTokm > 100000000) {
            clearDistance()
            alert("Invalid data")
        } else {
            setm(ftTom.toFixed(2));
            setNM(ftToNM.toFixed(2));
            setkm(ftTokm.toFixed(2));
        }
    }

    const calcm = () => {
        const mToft = m * 3.2808;
        const mToNM = m * 0.00053995;
        const mTokm = m * 0.001;
        if(mToft < 0 || mToft > 100000000 || mToNM < 0 || mToNM > 100000000 || mTokm < 0 || mTokm > 100000000) {
            clearDistance()
            alert("Invalid data")
        } else {
            setft(mToft.toFixed(2));
            setNM(mToNM.toFixed(2));
            setkm(mTokm.toFixed(2));
        }
    }

    const calcnm = () => {
        const nmToft = NM * 6076.115;
        const nmTokm = NM * 1.852;
        const nmTom = NM * 1852;
        if(nmToft < 0 || nmToft > 100000000 || nmTokm < 0 || nmTokm > 100000000 || nmTom < 0 || nmTom > 100000000) {
            clearDistance()
            alert("Invalid data")
        } else {
            setm(nmTom.toFixed(2));
            setft(nmToft.toFixed(2));
            setkm(nmTokm.toFixed(2));
        }
    }

    const calckm = () => {
        const kmToft = km * 3280;
        const kmTom = km * 1000;
        const kmTonm = km * 0.53995;
        if(kmToft < 0 || kmToft > 100000000 || kmTom < 0 || kmTom > 100000000 || kmTonm < 0 || kmTonm > 100000000) {
            clearDistance()
            alert("Invalid data")
        } else {
            setm(kmTom.toFixed(2));
            setft(kmToft.toFixed(2));
            setNM(kmTonm.toFixed(2));
        } 
    }

    const clearDistance = () => {
        setft('');
        setm('');
        setNM('');
        setkm('');
    }
    


  return (
      <div className="converter">

        {/* Wind section */}
        <div className="converter__el">
            <h1 className="converter__title">Wind</h1>
            <div className="converter__inputbox">

                <input className="converter__input" placeholder="m/s"
                    onChange={e => setMps(e.target.value)} value={mps} onKeyUp={calcMps} onClick={clearWind}>
                </input>
                <a className="converter__text converter__text--mps">m/s /</a>

                <input className="converter__input" placeholder="kts"
                    onChange={e => setKts(e.target.value)} value={kts} onKeyUp={calcKts} onClick={clearWind}>
                </input>
                <a className="converter__text converter__text--KT">KT /</a>

                <input className="converter__input" placeholder="km/h"
                    onChange={e => setkmph(e.target.value)} value={kmph} onKeyUp={calckmph} onClick={clearWind}>
                </input>
                <a className="converter__text converter__text--kmph">km/h</a>
            </div>
        </div>

        {/* Pressure section */}
        <div className="converter__el">
            <h1 className="converter__title">Pressure</h1>
            <div className="converter__inputbox">
                <input className="converter__input" placeholder="hPa"
                    onChange={e => sethPa(e.target.value)} value={hPa} onKeyUp={calchPa} onClick={clearPressure}>
                </input>
                <a className="converter__text converter__text--hpa"> hPa / </a> 
                    <input className="converter__input" placeholder="mmHg" onChange={e => setmmHg(e.target.value)} 
                        value={mmHg} onKeyUp={clacmmHg} onClick={clearPressure}>
                    </input> 
                    <a className="converter__text converter__text--mmhg"> mmHg / </a> 
                    <input  className="converter__input" placeholder="inHg" onChange={e => setinHg(e.target.value)} 
                        value={inHg} onKeyUp={clacinHg} onClick={clearPressure}>
                    </input> 
                    <a className="converter__text converter__text--inhg"> inHg </a>
            </div>
        </div>

        {/* Distance section */}
        <div className="converter__el">
            <h1 className="converter__title">Distance</h1>
            <div className="converter__inputbox">
                <input className="converter__input" placeholder="feet"
                    onChange={e => setft(e.target.value)} value={ft} onKeyUp={calcft} onClick={clearDistance}>
                </input>
                <a className="converter__text converter__text--ft"> ft / </a> 
                <input className="converter__input" placeholder="meeters" onChange={e => setm(e.target.value)} 
                    value={m} onKeyUp={calcm} onClick={clearDistance}>
                </input> 
                <a className="converter__text converter__text--m"> m /</a> 
                <input className="converter__input" placeholder="nautical mile" onChange={e => setNM(e.target.value)} 
                    value={NM} onKeyUp={calcnm} onClick={clearDistance}>
                </input> 
                <a className="converter__text converter__text--nm"> NM /</a> 
                <input className="converter__input" placeholder="kilometer" onChange={e => setkm(e.target.value)} 
                    value={km} onKeyUp={calckm} onClick={clearDistance}>
                </input> 
                <a className="converter__text converter__text--km"> km </a>
            </div>
        </div>

    </div>
  )
}

export default Converter;