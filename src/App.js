import './App.css';
import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Inventory from "./component/inventory";
import Characters from "./component/characters";

function App() {
  return (
    <Router>
      <div>

        <h5> Завдання. Головна сторінка - 2 роути на персонажів та інвентар. При кліку на відповідний роут - перехід на сторінку зі списком персонажів/інвентаря (коротка інформація). При кліку на конкрентний елемент - перехід на сторінку  цього елементу з детальною інформацією. З урахуванням того, що апі не надає можливості отримати поодинокі об'єкт, продумайте,як ви будете діставати їх на окремій сторінці з деталями.</h5>
        <hr></hr>
        <br></br>
        <Link to={'/characters'}> characters </Link>
        <br></br>
        <Link to={'/inventory'}> inventory </Link>
        <br></br>
        <Switch>
          <Route exact path={'/characters'} render={()=>(<Characters/>)}/>
                <Route exact path={'/inventory'} component={Inventory}/>
        </Switch>


      </div>
    </Router>

  );
}
export default App;
