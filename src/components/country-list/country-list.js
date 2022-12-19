import {useSelector,useDispatch} from "react-redux";
import './country-list.scss'
import {useNavigate} from "react-router-dom";
import {getDetails} from "../../redux/actions/get-country-actions";

const CountryList = () => {
    const {data} = useSelector(state => state.CountryReducer)
    const navigate  = useNavigate()
    const dispatch = useDispatch()
    const getDetail =  (id) =>{
        navigate(`/details/${id}`)
        dispatch(getDetails(id))
    }
  return(
      <div className={'country'}>
          {
              data.map((country,index) => {
                  return(
                      <div onClick={() => getDetail(country.area)} key={index} className={'country-list'}>
                          <div>
                              <img src={country.flags.png} alt=""/>
                          </div>
                          <div className={'param'}>
                              <h3> {country.name.common}</h3>
                              <p> <span>Population:</span>{country.population}</p>
                              <p><span>Region:</span>{country.region}</p>
                              <p><span>Capital:</span>{country.capital}</p>
                          </div>
                      </div>
                  )
              })
          }
      </div>
  )
}
export default CountryList