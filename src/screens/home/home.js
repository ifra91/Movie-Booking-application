import React from "react";
import "./Home.css";
import Header from "./../../common/header/Header";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import moviesData from "./../../common/moviesData";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="upcoming-movies-header">
          <span>Upcoming Movies</span>
        </div>
        <div>
          <GridList
            style={{ margin: 0, flexWrap: "nowrap" }}
            cols={6}
            cellHeight={250}>
            {this.state.movies.map(movie => (
              <GridListTile key={movie.id}>
                <img src={movie.poster_url} alt={movie.title} />
                <GridListTileBar title={movie.title} />
              </GridListTile>
            ))}
          </GridList>
          <div className="flex-container">
            <div className="left">
              <GridList cols={4} cellHeight={350}>
                {this.state.movies.map(movie => (
                  <GridListTile key={movie.id} style={{ cursor: "pointer" }}>
                    <img src={movie.poster_url} alt={movie.title} />
                    <GridListTileBar
                      title={movie.title}
                      subtitle={`Release Date: ${new Date(
                        movie.release_date
                      ).toDateString()}`}
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;