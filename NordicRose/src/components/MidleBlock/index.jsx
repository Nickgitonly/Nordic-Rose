import React, { useEffect, useState } from "react";
import ImagesBlock from "/src/components/ImagesBlock/index.jsx";
import "./styles.css";
// пересмотреть нейминг
function ArticleList({ articles }) {
  return (
    <div className="block-img-blog">
      {articles.map((article) => (
        <div className="image-container" key={article.id}>
          <img
            src={article.imageUrl}
            alt={article.title}
            className="image-blocks"
          />
          <div className="image-block-txt">{article.title}</div>
        </div>
      ))}
    </div>
  );
}
// не чіпати потім подивлюсь

function MidleBlock() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const AllArticles = [
      {
        id: 1,
        title: "Here are some things you should know regarding how we work",
        imageUrl: "../src/assets/images/all-articles1.png",
      },
      {
        id: 2,
        title:
          "Granny gives everyone the finger, and other tips from OFFF Barcelona",
        imageUrl: "../src/assets/images/all-articles4.png",
      },
      {
        id: 3,
        title: "Hello world, or, in other words, why this blog exists",
        imageUrl: "./src/assets/images/all-articles6.png",
      },
      {
        id: 4,
        title: "Connecting artificial intelligence with digital product design",
        imageUrl: "../src/assets/images/all-articles3.png",
      },
      {
        id: 5,
        title: "Connecting artificial intelligence with digital product design",
        imageUrl: "../src/assets/images/all-articles7.png",
      },
      {
        id: 6,
        title: "Connecting artificial intelligence with digital product design",
        imageUrl: "../src/assets/images/all-articles8.png",
      },
      {
        id: 7,
        title: "Here are some things you should know regarding how we work",
        imageUrl: "../src/assets/images/all-articles2.png",
      },
      {
        id: 8,
        title:
          "Granny gives everyone the finger, and other tips from OFFF Barcelona",
        imageUrl: "../src/assets/images/all-articles5.png",
      },
      {
        id: 9,
        title: "Hello world, or, in other words, why this blog exists",
        imageUrl: "../src/assets/images/all-articles12.png",
      },
      {
        id: 10,
        title: "Connecting artificial intelligence with digital product design",
        imageUrl: "../src/assets/images/all-articles10.png",
      },
      {
        id: 11,
        title: "Connecting artificial intelligence with digital product design",
        imageUrl: "../src/assets/images/all-articles9.png",
      },
      {
        id: 12,
        title: "Connecting artificial intelligence with digital product design",
        imageUrl: "../src/assets/images/all-articles11.png",
      },
    ];
    // mdaaaa
    setArticles(AllArticles);
  }, []);

  return (
    <div className="main-footer">
      <div className="all-blog-art">
        <div className="ImagesBlock">
          <img src="images/Line 3.png" />
        </div>
        <div className="all-articles-header">All articles</div>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}

export default MidleBlock;
