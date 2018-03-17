import React, {Component} from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import settings from 'page-settings.json';
import LoadableComponent from 'components/Common/LoadableComponent';
import Loader from 'components/Common/Loader';
import Navigation from 'components/Common/Navigation';

const AsyncHome = LoadableComponent({
    loader: () => import(`components/HeaderBlock`),
    loading: Loader,
});

const AsyncIdea = LoadableComponent({
    loader: () => import(`components/IdeaBlock`),
    loading: Loader,
});

const AsyncSpeakers = LoadableComponent({
    loader: () => import(`components/SpeakersBlock`),
    loading: Loader,
});

const AsyncAgenda = LoadableComponent({
    loader: () => import(`components/AgendaBlock`),
    loading: Loader,
});

const AsyncPrice = LoadableComponent({
    loader: () => import(`components/PriceBlock`),
    loading: Loader,
});

const AsyncRegistration = LoadableComponent({
    loader: () => import(`components/RegistrationBlock`),
    loading: Loader,
});

const AsyncContact = LoadableComponent({
    loader: () => import(`components/FooterBlock`),
    loading: Loader,
});

export default class App extends Component {

    render() {
        const headerProps = settings.header;
        const ideaProps = settings.idea;
        const sellingProps = settings.selling;
        const speakersProps = settings.speakers;
        const agendaProps = settings.agenda;
        const priceProps = settings.price;
        const registrationProps = settings.registration;
        const footerProps = settings.footer;

        return (
            <BrowserRouter basename="avocado-test/build">
                <div className="App">
                    <Navigation />
                    <Switch>
                        <Route exact path="/" render={props => <AsyncHome {...props} headerProps={headerProps} /> } />
                        <Route path="/idea" render={props => <AsyncIdea {...props} ideaProps={ideaProps} sellingProps={sellingProps} /> } />
                        <Route path="/speakers" render={props => <AsyncSpeakers {...props} speakersProps={speakersProps} /> } />
                        <Route path="/agenda" render={props => <AsyncAgenda {...props} agendaProps={agendaProps} /> } />
                        <Route path="/price" render={props => <AsyncPrice {...props} priceProps={priceProps} /> } />
                        <Route path="/registration" render={props => <AsyncRegistration {...props} registrationProps={registrationProps} /> } />
                        <Route path="/contact" render={props => <AsyncContact {...props} footerProps={footerProps} /> } />
                        <Route render={() => <h1>404 Page not found</h1>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
