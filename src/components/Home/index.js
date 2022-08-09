import React, { useEffect, useState } from "react";
import ReactAudioPlayer from 'react-audio-player';
import api from '../../services/api';

import Tabs from "../Tabs";

import { Container, Button } from "./styles";


function Home() {
  const [resultWord, setResultWord] = useState([]);
  const [histList, setHistList] = useState("hello")
  const response = sessionStorage.getItem('histoico')

    

  useEffect(() => {
    wordSearch()
    setHistList(response)
  }, [histList]);

  async function wordSearch() {
    try {
      const response = await api.get(
        `/${histList}`,
      );
      setResultWord(response.data)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container className="responseCss">
      {resultWord.map((words, n) => {
        return (
          <Container key={n} className="containerMain">
            <div className="meanings" >
              <p> {words.word} </p>
              <p> həˈloʊ </p>
            </div>

            <ReactAudioPlayer
              src={words.phonetics[0].audio}
              autoPlay
              controls
              className="audioPlayer"
            />

            <div className="definitions">
              <h2>Meanings</h2>
              <p>verb - {words.meanings[0].definitions[0].definition} </p>

              <div className="buttonMain">
                <Button className="buttonBack">Voltar</Button>
                <Button className="buttonNext">Proximo</Button>
              </div>
            </div>
          </Container>
        );
      })}
      <div>
        <Tabs />

      </div>
    </Container>


  );
}

export default Home;
