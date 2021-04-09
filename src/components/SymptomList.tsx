import { IonItem, IonLabel, IonItemGroup } from '@ionic/react';

const SymptomList: React.FC = () => {
    return (
        <IonItemGroup>
        <IonItem className="new-background-color-1" button href="symptoms/symptom1" onClick={() => { }} detail>
            <IonLabel>
                Symptom 1
            </IonLabel>
        </IonItem>
        <IonItem className="new-background-color-1" button href="symptoms/symptom2" onClick={() => { }} detail>
            <IonLabel>
                Symptom 2
            </IonLabel>
        </IonItem>
        <IonItem className="new-background-color-1" button href="symptoms/symptom3" onClick={() => { }} detail>
            <IonLabel>
                Symptom 3
            </IonLabel>
        </IonItem>
        <IonItem className="new-background-color-1" button href="symptoms/symptom4" onClick={() => { }} detail>
            <IonLabel>
                Symptom 4
            </IonLabel>
        </IonItem>
        <IonItem className="new-background-color-1" button href="symptoms/symptom5" onClick={() => { }} detail>
            <IonLabel>
                Symptom 5
            </IonLabel>
        </IonItem>
        </IonItemGroup>
    );
  };
  
  export default SymptomList;