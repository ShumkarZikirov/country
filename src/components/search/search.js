import './search.scss'
import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {getRegionAction, searchCountry} from "../../redux/actions/get-country-actions";
import {getCountryRegion, getSearchCountry} from "../../config";

const Search = () => {
    const [text, setText] = useState('');
    const arr = [
        {name:'africa'},
        {name:'asia'},
        {name: 'america'},
        {name: 'europe'},
        {name: 'oceania'}
    ]
    const onSearchCountry = async (e) => {
        e.preventDefault()
        setText('')
        await getSearchCountry(text)
            .then(res => {
                dispatch(searchCountry(res.data))
            })

    }
    const getRegion = async (text) => {
        await getCountryRegion(text)
            .then(res => {
                dispatch(getRegionAction(res.data))
            })
    }
    const dispatch = useDispatch()
    return(
      <div className={'search'}>
          <form onSubmit={onSearchCountry} >
              <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder={'country'}/>
              <button type={"submit"}>sub</button>
          </form>
          <select onChange={(e) => getRegion(e.target.value)}>
              {
                  arr.map((elem,index) => {
                      return(
                          <option key={index} value={elem.name}>{elem.name}</option>
                      )
              })
              }
          </select>
      </div>
  )
}
export default Search