import { IonItem, IonLabel, IonItemGroup, IonRouterOutlet  } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {  Route } from 'react-router-dom';

const TreatmentList: React.FC = () => {
    return (
        // <IonReactRouter>
            <IonItemGroup>
            {/* <IonRouterOutlet>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/treatments">
                    <Treatments />
                </Route>
                <Route path="/symptoms">
                    <Symptoms />
                </Route>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
        </IonRouterOutlet> */}
            <IonItem button href="/treatments/treatment1" onClick={() => { }} detail>
                <IonLabel>
                    Treatment 1
                </IonLabel>
            </IonItem>
            <IonItem button href="/treatments/treatment2" onClick={() => { }} detail>
                <IonLabel>
                    Treatment 2
                </IonLabel>
            </IonItem>
            <IonItem button href="/treatments/treatment3" onClick={() => { }} detail>
                <IonLabel>
                    Treatment 3
                </IonLabel>
            </IonItem>
            <IonItem button href="/treatments/treatment4" onClick={() => { }} detail>
                <IonLabel>
                    Treatment 4
                </IonLabel>
            </IonItem>
            <IonItem button href="/treatments/treatment5" onClick={() => { }} detail>
                <IonLabel>
                    Treatment 5
                </IonLabel>
            </IonItem>
            </IonItemGroup>
        // </IonReactRouter>
    );
  };
  
  export default TreatmentList;