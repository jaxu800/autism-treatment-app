import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { medical, medkit, home } from 'ionicons/icons';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Symptoms from './pages/Symptoms';
import AnrcGuide from './pages/AnrcGuide';
import Assessments from './pages/Assessments';
import Add from './pages/Add';
import TopTreat from './pages/TopTreat'
import Rating from './pages/Ratings'
import TreatmentPage from './pages/TreatmentPage';
import SymptomPage from './pages/SymptomPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>

          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/treatments">
            <Treatments />
          </Route>
          <Route path="/symptoms">
            <Symptoms />
          </Route>

          <Route exact path="/anrc">
            <AnrcGuide />
          </Route>
          <Route exact path="/assmt">
            <Assessments />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/TopTreat">
            <TopTreat />
          </Route>
          <Route exact path="/Ratings">
            <Rating />
          </Route>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/treatments/5-HTP">
              <TreatmentPage />
          </Route>
          <Route exact path="/treatments/treatment2">
              <TreatmentPage />
          </Route>
          <Route exact path="/treatments/treatment3">
              <TreatmentPage />
          </Route>
          <Route exact path="/treatments/treatment4">
              <TreatmentPage />
          </Route>
          <Route exact path="/treatments/treatment5">
              <TreatmentPage />
          </Route>
          
          <Route exact path="/symptoms/symptom1">
              <SymptomPage />
          </Route>
          <Route exact path="/symptoms/symptom2">
              <SymptomPage />
          </Route>
          <Route exact path="/symptoms/symptom3">
              <SymptomPage />
          </Route>
          <Route exact path="/symptoms/symptom4">
              <SymptomPage />
          </Route>
          <Route exact path="/symptoms/symptom5">
              <SymptomPage />
          </Route>
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="treatments" href="/treatments">
            <IonIcon icon={medical} />
            <IonLabel>Treatments</IonLabel>
          </IonTabButton>
          <IonTabButton tab="symptoms" href="/symptoms">
            <IonIcon icon={medkit} />
            <IonLabel>Symptoms</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
