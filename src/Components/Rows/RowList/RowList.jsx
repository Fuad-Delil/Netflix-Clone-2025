import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TOP RATED" fetchurl={requests.fetchTopRated} />
      <Row title="DOCUMENTARY" fetchurl={requests.fetchDocumentaries} />
      <Row title="ACTIONS" fetchurl={requests.fetchActionMovies} />
      <Row title="TRENDING " fetchurl={requests.fetchTrending} />
      <Row title="UPCOMING" fetchurl={requests.fetchUpcoming} />
      <Row title="COMEDY" fetchurl={requests.fetchComedyMovies} />
      <Row title="HORROR" fetchurl={requests.fetchHorrorMovies} />
      <Row title="ANIMATION" fetchurl={requests.fetchAnimationMovies} />
      <Row title="SCIENCE FICTION" fetchurl={requests.fetchScienceFiction} />
    </div>
  );
};

export default RowList;
