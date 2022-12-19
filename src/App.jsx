import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Search from "./components/search";
import {getCountry} from './config'
import {useEffect} from "react";
import {useDispatch } from "react-redux";
import {getCountryActions} from "./redux/actions/get-country-actions";
import Details from "./components/details";
import Nav from "./components/nav";

function App() {
    const dispatch = useDispatch()
    useEffect(   () => {
            const data = async () =>{
                await getCountry()
                    .then(res => {
                        dispatch(getCountryActions(res.data))
                    })
            }
           data()
    },[])
  return (
    <div className={'App'}>
      <Header/>
        <Nav/>
        <Details/>
    </div>
  );
}

export default App;
