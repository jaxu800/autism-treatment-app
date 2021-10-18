import { IonItem, IonLabel, IonItemGroup } from '@ionic/react';

const SymptomList: React.FC = () => {
    var symptomss = ["Aggression", "Anxiety", "Attention", "Cognition", "Communication", "Irritability" ];
    return (
        <IonItemGroup>
        {
            symptomss.map(elem => {
                return(
                    <IonItem className="new-background-color-3" button href={"symptoms/" + elem} onClick={() => {}} detail>
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