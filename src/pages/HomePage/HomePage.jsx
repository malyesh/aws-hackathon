import './HomePage.scss';
import { useEffect, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import greater from '../../assets/icons/greaterthan.svg';
import SearchResults from '../../components/SearchResults/SearchResults';
import { SearchComponent } from '../../components/SearchComponent/SearchComponent';
import axios from 'axios';
import dataFile from '../../data/data.json';

export default function HomePage() {
  const [headerTitle, setHeaderTitle] = useState('Trending datasets');
  const [data, setData] = useState(dataFile);
  const [suggested, setSuggested] = useState(dataFile);
  // const [queryData, setQueryData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target.searchInput.value);
    const query = e.target.searchInput.value;

    // console.log(dataFile);
    const returnedData = [];
    const suggestedData = [];
    dataFile.forEach((obj) => {
      if (
        obj.name.toLowerCase().includes(query) ||
        obj.description.toLowerCase().includes(query)
      ) {
        returnedData.push(obj);
      }
      // if (obj.description.toLowerCase().includes(query)) {
      //   returnedData.push(obj);
      // }
      else {
        suggestedData.push(obj);
      }
    });
    console.log(returnedData);
    setData(returnedData);
    setSuggested(suggestedData);
    setHeaderTitle('Resulting datasets');
    e.target.searchInput.value = '';

    const mappedData = dataFile.map((obj) => {
      return { name: obj.name, description: obj.description };
    });
    console.log(mappedData);
    const receivingObject = { "content": `on my site, a user's search query is ${searchQuery}, and my data is ${searchResults}. I need you to intelligently look through this data, and return to me oly the name objects which contained data that is most potentially related or have crossover with the user's original search query.` }

    console.log();
    console.log(mappedData);
    const formattedContent = insertObjectPairs(mappedData, query);
    console.log(formattedContent);
    const options = {
      method: 'POST',
      url: 'https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3742fd7577msh2de1990ea10bdf3p1a8845jsnbf211dcc4d2b',
        'X-RapidAPI-Host': 'chatgpt-best-price.p.rapidapi.com',
      },
      data: {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            formattedContent,
          }, // this is where we have to put the sentence that we query for the json with
        ],
      },
    };
    //`on my site, a user's search query is ${query}, and my data is ${mappedData}. I need you to intelligently look through this data, and return to me oly the name objects which contained data that is most potentially related or have crossover with the user's original search query.`
    try {
      const response = axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  function insertObjectPairs(objectPairs, query) {
    const objects = JSON.stringify(objectPairs);
    console.log(objects);

    const baseString = {
      content: `on my site, a user's search query is ${query}, and my data is ${objects}. I need you to intelligently look through this data, and return to me oly the name objects which contained data that is most potentially related or have crossover with the user's original search query.`,
    };
    console.log(baseString);
    const formattedPairs = objectPairs
      .map((pair) => `${pair.key}: ${pair.value}`)
      .join(',\n');

    baseString.content += formattedPairs;

    return baseString;
  }

  return (
    <div className='body__container'>
      <nav className='breadcrumb-container'>
        <p className='breadcrumb__1'>AWS Data Exchange</p>
        <img src={greater} alt='chevron img' className='breadcrumb__icon' />
        <p className='breadcrumb__2'>Browse catalog</p>
      </nav>

      <main className='main-container'>
        <Filter />
        <div className='main-column'>
          <SearchComponent handleSubmit={handleSubmit} />
          <SearchResults
            dataSheet={data}
            title={headerTitle}
            suggested={suggested}
          />
        </div>
      </main>
    </div>
  );
}
