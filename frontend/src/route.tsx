import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Sobre';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={() => (
                    <>
                        <Home />
                    </>
                )} />
                <Route path="/sobre" component={() => (
                    <>
                        <Menu menu="sobre"/>
                        <Info />
                    </>
                )} />
                <Route path="/projetos" component={() => (
                    <>
                        <Menu menu="projetos"/>
                        <Projects />
                    </>
                )} />
                <Route component={() => (
                    <>
                        <Menu />
                        <NotFound />
                    </>
                )} />
            </Switch>
        </BrowserRouter>
    )
}