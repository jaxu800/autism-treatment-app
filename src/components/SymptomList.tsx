import { IonItem, IonLabel, IonItemGroup } from '@ionic/react';

const SymptomList: React.FC = () => {
    return (
        <IonItemGroup>
        <IonItem className="new-background-color-1" button href="symptoms/1" onClick={() => { }} detail>
            <IonLabel>
                Symptom 1
            </IonLabel>
        </IonItem>
        <IonItem className="new-background-color-1" button href="symptoms/2" onClick={() => { }} detail>
            <IonLabel>
                Symptom 2
            </IonLabel>
        </IonItem>
        <IonItem className="new-background-color-1" button href="symptoms/3" onClick={() => { }} detail>
            <IonLabel>
                Symptom 3
            </IonLabel>
        </IonItem>
        <IonItem className="new-background-color-1" button href="symptoms/4" onClick={() => { }} detail>
            <IonLabel>
                Symptom 4
            </IonLabel>
        </IonItem>
        <IonItem className="new-background-color-1" button href="symptoms/5" onClick={() => { }} detail>
            <IonLabel>
                Symptom 5
            </IonLabel>
        </IonItem>
        </IonItemGroup>
    );
  };
  
  export default SymptomList;