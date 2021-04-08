import { IonItem, IonLabel, IonItemGroup, IonRouterOutlet  } from '@ionic/react';

const TreatmentList: React.FC = (props) => {
    return (  
        <IonItemGroup>
<<<<<<< HEAD:src/components/TreatmentList.tsx
            {/* //For each button,  */}
            <IonItem button href="/treatments/5-HTP" onClick={() => { }} detail>
=======
            <IonItem button href="/treatments/Treatment 1" onClick={() => { }} detail>
>>>>>>> 7f570af7be1e2b9d046d5c895ca22e25b3269c70:src/pages/TreatmentList.tsx
                <IonLabel>
                    5-HTP
                </IonLabel>
            </IonItem>
            <IonItem button href="/treatments/treatment/2" onClick={() => { }} detail>
                <IonLabel>
                    Treatment 2
                </IonLabel>
            </IonItem>
            <IonItem button href="/treatments/treatment/3" onClick={() => { }} detail>
                <IonLabel>
                    Treatment 3
                </IonLabel>
            </IonItem>
            <IonItem button href="/treatments/treatment/4" onClick={() => { }} detail>
                <IonLabel>
                    Treatment 4
                </IonLabel>
            </IonItem>
            <IonItem button href="/treatments/treatment/5" onClick={() => { }} detail>
                <IonLabel>
                    Treatment 5
                </IonLabel>
            </IonItem>
        </IonItemGroup>
    );
  };
  
  export default TreatmentList;
