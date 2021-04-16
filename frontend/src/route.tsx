import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Sobre';
import Projects from './pages/Projects';
import NotFound from './pages/Sobre';

export default function Router (){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/sobre" component={Info}/>
            <Route path="/projects" component={Projects}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
    )
}