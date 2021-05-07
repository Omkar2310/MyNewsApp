import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/navbar";
import NewsContent from "./components/newscontent";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  console.log(category);

  const newsapi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=a71ea7628351478095cd9817f365993a&pageSize=${loadMore}&category=${category}`
      );
      // const news = await axios.get(
      //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`
      // );
      // console.log(news);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(newsArray);

  useEffect(() => {
    newsapi();
  }, [newsResults, category, loadMore]);

  return (
    <div className="App">
      <NavBar setCategory={setCategory} />
      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <Footer />
    </div>
  );
}

export default App;
