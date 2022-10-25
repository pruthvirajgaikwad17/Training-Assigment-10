import React, { useReducer, useState } from "react";
import "./App.js";
import SelectOption from "./SelectOption.js";

var responseData = [
  {
    countryId: 1,
    countryName: "India",
    states: [
      {
        stateId: 1,
        stateName: "Gujarat",
        cities: [
          {
            cityId: 1,
            cityName: "Ahmadabad",
          },
          {
            cityId: 2,
            cityName: "Surat",
          },
          {
            cityId: 2,
            cityName: "Baroda",
          },
        ],
      },
      {
        stateId: 2,
        stateName: "Maharashtra",
        cities: [
          {
            cityId: 3,
            cityName: "Mumbai",
          },
          {
            cityId: 4,
            cityName: "Pune",
          },
        ],
      },
    ],
  },
  {
    countryId: 2,
    countryName: "Canada",
    states: [
      {
        stateId: 3,
        stateName: "Ontario",
        cities: [
          {
            cityId: 5,
            cityName: "Toronto",
          },
          {
            cityId: 6,
            cityName: "Hamilton",
          },
        ],
      },
    ],
  },
];

const crty = [];
for (var i = 0; i < responseData.length; i++) {
  crty.push(responseData[i].countryName);
}

var initialState = [];

const reducer = (state, action) => {
  state = [];
  if (action.type === "sel") {
    return state;
  } else {
    for (let i = 0; i < responseData.length; i++) {
      if (action.type == i) {
        window.currentCountry = i;
        //console.log(responseData[i].states);
        for (var j = 0; j < responseData[i].states.length; j++) {
          state.push(responseData[i].states[j].stateName);
        }
        return state;
      }
    }
  }
};

var initialCity = [];
const cityReducer = (city, action) => {
  city = [];
  if (action.type === "sel") {
    return city;
  } else {
    for (
      let i = 0;
      i < responseData[window.currentCountry].states.length;
      i++
    ) {
      if (action.type == i) {
        console.log(responseData[window.currentCountry].states[i].cities);
        let cities_curr = responseData[window.currentCountry].states[i].cities;
        for (let j = 0; j < cities_curr.length; j++) {
          city.push(cities_curr[j].cityName);
        }
        return city;
      }
    }
  }
};

const Opt = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [city, cityDispatch] = useReducer(cityReducer, initialCity);
  function changedCountry() {
    for (var i = 0; i < city.length; i++) {
      city.pop();
    }
    for (var i = 0; i < city.length; i++) {
      city.pop();
    }
  }
  //console.log(state);
  return (
    <>
      <SelectOption
        arr={crty}
        id="countrySelect"
        val="Select Country"
        onC={(e) => {
          dispatch({ type: e.target.value });
          changedCountry();
        }}
      />

      <SelectOption
        arr={state}
        id="stateSelect"
        val="Select State"
        onC={(e) => cityDispatch({ type: e.target.value })}
      ></SelectOption>

      <SelectOption arr={city} id="selectCity" val="Select City"></SelectOption>
    </>
  );
};

export default Opt;
