import { IonItem, IonLabel, IonItemGroup, IonRouterOutlet  } from '@ionic/react';

const TreatmentList: React.FC = (props) => {
    return (  
        <IonItemGroup>
            <IonItem button href="/treatments/Treatment 1" onClick={() => { }} detail>
                <IonLabel>
                    5-HTP
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
    );
  };
  
  export default TreatmentList;
