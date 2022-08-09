import styled from "styled-components";

export const Container = styled.div`

  @media only screen and (min-width: 1024px) {
    .container {
      border: 1px solid #cccccc;
      border-top: 1px solid #cccccc !important;
    }
    
    .flex {
      overflow: auto;
    }

  }

  
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  .tabs {
    width: 80%;
    height: auto;
    min-height: 400px;
    background: #cccccc;
    margin: 3.5rem auto 1.5rem;
    padding: 2rem 1rem;
    color: #e8f0f2;
    border-radius: 1rem;
  
    @media (max-width: 769px) {
      padding: 2rem 0;
    }
  }
  
  ul.nav {
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #cccccc;
    border-radius: 5px;
  
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  
  ul.nav li {
    width: 50%;
    padding: 1rem;
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;
  }
  
  ul.nav li:nth-child(2) {
    border-radius: 0;
  }
  
  ul.nav li:hover {
    background: rgba(50, 224, 196, 0.15);
  }
  
  ul.nav li.active {
    background: #cccccc;
  }
  

  .flex {
    display: flex;
    list-style-type: none;
    justify-content: center;
    overflow: auto;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-item-1 {
    flex: 1;
  }

  .item {
    padding: 5px;
    margin: 5px;
    border: 1px solid;
    text-align: center;
    font-size: 1.5em;
  }

  .container {
    max-width: 90%;
    margin: 0 auto;
    border: 1px solid #cccccc;
    border-top: none;
  }

  .flexContainer {
    display: flex;
    flex-wrap: nowrap;
    background-color: DodgerBlue;
    list-style-type: none;
  }

  .flexItem {
    background-color: #cccccc;
    width: 100px;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
  }

  .star {
    width: 20px;
    height: 20px;
  }
`
