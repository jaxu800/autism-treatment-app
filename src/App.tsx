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
import './pages/Tab1.css';

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6IZL_5BuVd6OuYSy7SMBY9O-GkkG1HAk",
  authDomain: "autism-treatment-app-test.firebaseapp.com",
  databaseURL: "https://autism-treatment-app-test-default-rtdb.firebaseio.com",
  projectId: "autism-treatment-app-test",
  storageBucket: "autism-treatment-app-test.appspot.com",
  messagingSenderId: "207864894310",
  appId: "1:207864894310:web:9888f2029aaf4cc3346ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home" component={Home} />
          <Route exact path="/treatments" component={Treatments} />
          <Route path="/symptoms" component={Symptoms} />

          <Route exact path="/anrc" component={AnrcGuide} />
          <Route exact path="/assmt" component={Assessments} />       
          <Route exact path="/add" component={Add} />
          <Route exact path="/TopTreat" component={TopTreat}/>    
          <Route exact path="/Ratings" component={Rating} />

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/treatments/:temp" component={TreatmentPage} />

          <Route exact path="/symptoms/:temp" component={SymptomPage} />

          
                   
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="treatments" href="/treatments">
            <IonIcon icon={medical}/>
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

