import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './details.scss'
const Details = () => {
    const {details} = useSelector(state => state.CountryReducer)
    const {country} = useParams()
  return(
      <div>
          {
              details.map((elem, index) => {
                  return(
                      <div className={'details'}>
                          <div className={'details-left'}>
                              <img src={elem.flags.png} alt=""/>
                          </div>
                          <div className={'details-right'}>
                                <h1>{elem.name.common}</h1>
                              <div className={'params'}>
                                  <div>
                                      <p><span>Native Name:</span>{elem.altSpellings[1]}</p>
                                      <p> <span>Population:</span>{elem.population}</p>
                                      <p><span>Region:</span>{elem.region}</p>
                                      <p><span>Capital:</span>{elem.capital}</p>
                                      <p><span>Sub Region:</span>{elem.subregion}</p>
                                      <a href={elem.maps.googleMaps}>Maps</a>
                                  </div>
                                  <div className={'border'}>
                                      <p><span>Border Countries:</span></p>
                                      {
                                          elem.borders.map(elem => {
                                              return <button >{elem}</button>
                                          })
                                      }
                                  </div>
                              </div>
                          </div>
                      </div>
                  )
              })
          }
      </div>
  )
}
export default Details