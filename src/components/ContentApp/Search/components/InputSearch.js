import React, {Component} from 'react'
import SearchInput from 'react-search-input'
export default function InputSearch(props) {
    
    return (
        <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>

            {
              props.cryptoListArray.length < 1 ?
                <SearchInput type="text" disabled className="search-input form-control" value ={props.inputValue} id="inlineFormInputGroupUsername2" placeholder="Search Coin" />
                :
                <SearchInput type="text" className="search-input form-control" value ={props.inputValue} onChange={props.keepInput} id="inlineFormInputGroupUsername2" placeholder="Search Coin" />
            }
          </div>
    )
}