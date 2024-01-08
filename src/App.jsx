import Home from './Home.jsx';
import Tasks from './Tasks.jsx';
import Notes from './Notes.jsx';
import Calendar from './Calendar.jsx';
import Timer from './Timer.jsx';
import Moods from './Moods.jsx';
import Habits from './Habits.jsx';
import BackButton from './BackButton.jsx'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="fixed top-5 right-5">
        <BackButton />
      </div>
      <Switch> 
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route exact path="/tasks">
          <Tasks />
        </Route>
        <Route exact path="/notes">
          <Notes />
        </Route>
        <Route exact path="/calendar">
          <Calendar />
        </Route>
        <Route exact path="/timer">
          <Timer />
        </Route>
        <Route exact path="/moods">
          <Moods />
        </Route>
        <Route exact path="/habits">
          <Habits />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;