import { Redirect, Route, Switch } from "react-router-dom";
import { Heading } from "./components/heading/Heading";
import { SideNavBar } from "./components/sideNavBar/SideNavBar";
import { Latest } from "./containers/latest/Latest";
import { NowPlaying } from "./containers/nowPlaying/NowPlaying";
import { Popular } from "./containers/popular/Popular";
import { TopRated } from "./containers/topRated/TopRated";
import { Upcoming } from "./containers/upcoming/Upcoming";
import { useEffect } from "react";
import { importMovies } from "./store/actions";
import { connect } from "react-redux";
import { MovieDetail } from "./containers/movieDetail/movieDetail";
import { WatchList } from "./containers/watchList/WatchList";
import { SelectedList } from "./containers/selectedList/selectedList";
import "./App.sass";

function App({ importMovies }) {
  useEffect(() => {
    importMovies("latest");
    importMovies("now_playing");
    importMovies("popular");
    importMovies("top_rated");
    importMovies("upcoming");
  }, []);
  return (
    <div className="main">
      <Heading />
      <div className="content">
        <SideNavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/latest" />
          </Route>
          <Route path="/latest" component={Latest} />
          <Route path="/now-playing" component={NowPlaying} />
          <Route path="/popular" component={Popular} />
          <Route path="/top-rated" component={TopRated} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/movie-detail/:id" component={MovieDetail} />
          <Route path="/watch-list" component={WatchList} />
          <Route path="/selected-movies" component={SelectedList} />
        </Switch>
      </div>
    </div>
  );
}

export default connect(null, { importMovies })(App);
