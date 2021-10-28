import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from '../components/Cards';
import Loading from '../components/Loading';
import { Title } from '../style/styles';
import '../style/home.css';

export default function Home() {

  const [info, setInfo] = useState([]);
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get('http://hp-api.herokuapp.com/api/characters')
      .then(response => setInfo(response.data))
      .catch(err => console.error(err));
      setIsLoading(false);
  }, []);

  useEffect(() => {
    setFiltro(
      info.filter(info => info.name.toLowerCase().includes(busca.toLowerCase()))
    );
  }, [busca, info]);

  const filterHouse = ({ target }) => {
    if (target.value === 'all') {
      return setFiltro(info);
    }

    setFiltro(
      info.filter(info => info.house === target.value)
    );
  };

  return (
    <div>
      <Title>Wizarding World</Title>
      <input onChange={ (e) => setBusca(e.target.value) } placeholder="busque o personagem" type="text"/>
      <select onChange={ filterHouse } name="house" id="house">
        <option value="all">All</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>

      {isLoading ? <Loading /> : (
        <div className="cards">
        {filtro.map((character, index) => (
          <Card character={character} key={index} />
        ))}
        </div>
      )}
    </div>
  );
};
