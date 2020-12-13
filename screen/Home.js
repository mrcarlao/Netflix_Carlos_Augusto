import React, { useEffect, useState } from 'react';

import { StatusBar, Dimensions } from 'react-native';

import styled from 'styled-components/native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import LinearGradient from 'react-native-linear-gradient';
import { GetCountry, GetLocation } from '../utils/Locations';
import ProfileContext from "../Context/ProfileContext";




// const api = [
//   require('../assets/movie1.jpg'),
//   require('../assets/movie2.jpg'),
//   require('../assets/movie3.jpg'),
//   require('../assets/movie4.jpg'),
// ];

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Botao = styled.Button`
  width: 100px
  height: 500px
`;



/**
 * Utilizando a biblioteca react-spring
 * Anime o componente Post para que ele desapareça assim que essa tela for construida.
 * Leve a opacidade dele de 1 para 0 em 3 segundos.
 */

const Home = (props) => {


  const [movies, setMovies] = useState([]);
  const [nationalMovies, setNationalMovies] = useState([]);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    GetLocation()
      .then((info) => {
        setPosition(info);
      })
      .catch((error) => {
        setPosition(null);
      });
  }, []);

  useEffect(() => {
    const getNationalMovies = async () => {
      if (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const country = await GetCountry({ lat, lng });

        const filteredMovies = movies.filter((item, index) => {
          return item.Country.indexOf(country) !== -1;
        });
        setNationalMovies(filteredMovies);
      }
    };
    getNationalMovies();
  }, [position]);


  useEffect(() => {
    const data = require("../assets/Movies.json")
    setMovies(data);

  }, []);



  return (
    <ProfileContext.Consumer>
      {({ user, changeUser }) => {
        let movieToResume = [];
        if (user) {
          const data = require("../assets/moviesToResume.json")
          movieToResume = data[user];
        }
        return (
          <>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="light-content"
            />
            <Container>
              <Poster source={require('../assets/poster.jpg')}>
                <Gradient
                  locations={[0, 0.2, 0.6, 0.93]}
                  colors={[
                    'rgba(0,0,0,0.5)',
                    'rgba(0,0,0,0.0)',
                    'rgba(0,0,0,0.0)',
                    'rgba(0,0,0,1)',
                  ]}>
                  <Header />
                  <Hero />
                </Gradient>
              </Poster>
              <Movies label={`Continuar Assistindo ${user}`}
                data={movieToResume ? movieToResume : []}
              />
              <Movies label="Filmes Nacionais" data={nationalMovies} />
              <Movies label="Recomendados" data={movies} />
              <Movies label="Top 10" data={movies} />
            </Container>
          </>
        )
      }
      }
    </ProfileContext.Consumer>
  );
};

export default Home;
