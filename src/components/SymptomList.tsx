import { IonItem, IonLabel, IonItemGroup } from '@ionic/react';

const SymptomList: React.FC = () => {
    return (
        <IonItemGroup>
        <IonItem button onClick={() => { }} detail>
            <IonLabel>
                Symptom 1
            </IonLabel>
        </IonItem>
        <IonItem button onClick={() => { }} detail>
            <IonLabel>
                Symptom 2
            </IonLabel>
        </IonItem>
        <IonItem button onClick={() => { }} detail>
            <IonLabel>
                Symptom 3
            </IonLabel>
        </IonItem>
        <IonItem button onClick={() => { }} detail>
            <IonLabel>
                Symptom 4
            </IonLabel>
        </IonItem>
        <IonItem button onClick={() => { }} detail>
            <IonLabel>
                Symptom 5
            </IonLabel>
        </IonItem>
        </IonItemGroup>
    );
  };
  
  export default SymptomList;