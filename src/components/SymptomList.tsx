import { IonItem, IonLabel, IonItemGroup } from '@ionic/react';

const SymptomList: React.FC = () => {
    var symptoms = ["Aggression", "Anxiety", "Attention", "Cognition", "Communication", "Irritability" ];
    return (
        <IonItemGroup>
        {
            symptoms.map(elem => {
                return(
                    <IonItem className="new-background-color-1" button href={"symptoms/" + elem} onClick={() => {}} detail>
                        <IonLabel>
                            {elem}
                        </IonLabel>
                    </IonItem>
                )
            })
        }
        </IonItemGroup>
    );
  };
  
  export default SymptomList;