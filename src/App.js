import { Redirect, Route, Switch } from "react-router-dom";
import "./App.sass";
import { Col, Row } from "antd";
import { Heading } from "./components/heading/Heading";
import { SideNavBar } from "./components/sideNavBar/SideNavBar";
import { Latest } from "./containers/latest/Latest";
import { NowPlaying } from "./containers/nowPlaying/NowPlaying";
import { Popular } from "./containers/popular/Popular";
import { TopRated } from "./containers/topRated/TopRated";
import { Upcoming } from "./containers/upcoming/Upcoming";

function App() {
  return (
    <div className="main">
      <Heading />
      <div className="content">
        <Row gutter={[48, 8]}>
          <Col  span={6}>
            <SideNavBar />
          </Col>
          <Col  span={18}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/latest" />
              </Route>
              <Route path="/latest" component={Latest} />
              <Route path="/now-playing" component={NowPlaying} />
              <Route path="/popular" component={Popular} />
              <Route path="/top-rated" component={TopRated} />
              <Route path="/upcoming" component={Upcoming} />
            </Switch>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
