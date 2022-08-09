import React, { useState, useEffect } from "react";
import { Container } from "./styles";

import Star from "../../assets/star.png"
import StarBlack from "../../assets/startBlack.png"


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [fullList, setFullList] = useState([])
  const [favList, setFavList] = useState([])
  const [value, setValue] = useState([])

  const handleFavAddClick = (e) => {
    setFavList(preState => [...preState, e])
    setFullList(preState => preState.filter(item => item !== e))
  }
  const handleRemoveFavAddClick = (e) => {
    setFavList(preState => preState.filter(item => item !== e))
    setFullList(preState => [...preState, e])
  }

  const handleClick = (e) => {
    setValue(preState => [...preState, e])
    sessionStorage.setItem('histoico', JSON.stringify(value));
  }

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  useEffect(() => {
    fetch('./dicionario.json', {
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json())
      .then(res => setFullList(res.words))

  }, [])


  return (
    <Container className="tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Word List
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Favorites
        </li>
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          History
        </li>
      </ul>
      <div className="outlet container">
        {activeTab === "tab1" ?
          <ul className="flex flex-wrap">
            {
              fullList.map(e =>
                <li className="item" key={e._source} onClick={() => handleClick(e)}>{e} <img key={e._source} onClick={() => handleFavAddClick(e)} className="star" src={StarBlack} /></li>
              )
            }
          </ul> :
          <ul className="flex flex-wrap">
            {
              favList.map(e =>
                <li className="item" key={e._source}>{e} <img key={e._source} className="star" onClick={() => handleRemoveFavAddClick(e)} src={Star} /></li>
              )
            }
          </ul>
        },
        {activeTab === "tab3" ?
          <ul className="flex flex-wrap">

            {
              value?.map(e =>
                <li className="item" key={e}>{e}</li>
              )
            }

          </ul>
       : <></>
       }
      </div>


    </Container>
  );
};
export default Tabs;