import React, { useState, useEffect } from 'react';
import './home.css'
import Clock from 'react-live-clock';
import moment from 'moment';
import world from '../img/world.png';

const imgwCiv = {
  base: "https://awiacja.imgw.pl/metar30.php?airport="
}

const imgwMil = {
  base : "https://awiacja.imgw.pl/metarmil.php?airport="
}

const rsstojson = {
  base : "https://cors-anywhere.herokuapp.com/"
}



const notam = {
  base: "https://v4p4sz5ijk.execute-api.us-east-1.amazonaws.com/anbdata/states/notams/notams-realtime-list?",
  api: "d3cb82c0-d0fb-11ea-92a6-f1939f4f9295"
}


function Home() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState([]);
  const [notamResp, setNotam] = useState([]);
  
  const milList = ['EPCE', 'EPDA', 'EPDE', 'EPIR', 'EPKS', 'EPLK', 'EPLY', 'EPMB', 'EPMI', 'EPMM', 'EPNA', 'EPOK', 'EPPR', 'EPPW', 'EPRA', 'EPSN', 'EPTM']
  const civList = ['EPBY', 'EPGD', 'EPKK', 'EPKT', 'EPLB', 'EPLL', 'EPMO', 'EPPO', 'EPRA', 'EPRZ', 'EPSC', 'EPSY', 'EPWA', 'EPWR', 'EPZG']
    
  useEffect(() => {
    setWeather(['Loading IMGW MEATR database..'])

    async function fetchData () {
      const list = ['EPCE', 'EPDA', 'EPDE', 'EPIR', 'EPKS', 'EPLK', 'EPLY', 'EPMB', 'EPMI', 'EPMM', 'EPNA', 'EPOK', 'EPPR', 'EPPW', 'EPRA', 'EPSN', 'EPTM'];
      if (list.includes(query)) {


        try {
          const metarData = await fetch(`${rsstojson.base}${imgwMil.base}${query}`)
          let response = await metarData.text();
          let parser = new DOMParser();
          let xml = parser.parseFromString(response, "application/xml");
          let metar = xml.getElementsByTagName("description")[1].innerHTML;
          setWeather(metar);
        } catch (e) {
          console.log(e.message)
          setWeather(['Failed, try again'])
        }
      
       } else {

        try {
          const metarData = await fetch(`${rsstojson.base}${imgwCiv.base}${query}`)
          let response = await metarData.text();
          let parser = new DOMParser();
          let xml = parser.parseFromString(response, "application/xml");
          let metar = xml.getElementsByTagName("description")[1].innerHTML;
          setWeather(metar);
        } catch (e) {
          console.log(e.message)
          setWeather(['Failed, try again'])
        }
         
       }
       
    }

    fetchData()
  }, [query]);

  
useEffect(() => {
  setNotam(['Loading ICAO NOTAM database...'])
  async function fetchNotams () {

    try {
      const notamData = await fetch(`${notam.base}api_key=${notam.api}&format=json&criticality=&locations=${query}`)
      const response = await notamData.json();
      let notams = [];
      if(response.length !== 0) {
        //ICAO API not always responds, sometimes it's empty array
        for (let i = 0; i < response.length; i++) {
        notams.push(`Nr: ${response[i].key}, Start date: ${response[i].startdate}, End date: ${response[i].enddate}, Message: ${response[i].message}`)
        }
        } else {
          notams.push('ICAO NOTAM API not responding. I`m trying to load data.. Please wait or refresh:)')
          fetchNotams()
        }
      
      setNotam(notams);
    
    } catch (e) {
      console.log(e.message)
      setNotam(['Failed, try again'])
    }
  };

  
  fetchNotams()

}, [query])


  return (
      
      <main>

<div className="clock-box">
      <a className="clock"><img src={world} />Loc: <Clock format={'HH:mm:ss'} ticking={true} timezone={''}/></a> 
        <a className="clock utc">UTC: <Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC'}/></a>
        </div>


      <select disabled={false} className="selectbox" value={query} 
          onChange={e => setQuery(e.target.value)}>
            <option>Click here</option>
            <optgroup label="Military">
              {milList.map(el=> {
                return (
                <option key={el.toString()} value={el}>{el}</option>
                )
              })}
            </optgroup>
            <optgroup label="Civil">
            {civList.map(el=> {
                return (
                <option key={el.toString()} value={el}>{el}</option>
                )
              })}

            </optgroup>
          </select>

      {(milList.includes(query) || civList.includes(query)) ? (
      <div>
        
        <div className="metar-box">
          <div className="metar">{weather}</div>
        </div>

        
        <div className="notam-box">
          Notam:
          {notamResp.map(el=> {
            return (
            <div className="notam" key={el.toString()} value={el}>{el}</div>
            )
          })}
        </div>

      </div>
      ) : (
        <div>
        <div className="noinputbox">
         <div className="noinput">Choose aerodrome above to download METAR and NOTAM data.</div>
        </div>
      </div>
      )}
    </main>

  );
}

export default Home;
