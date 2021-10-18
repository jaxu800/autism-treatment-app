import { IonItem, IonLabel, IonItemGroup, IonRouterOutlet  } from '@ionic/react';

const TreatmentList: React.FC = () => {
    var treatments = ["5-HTP", "Biotin", "Blend of Amino Acids", "Calcium", "Carntine", "Chromium", "CoQ10", "Cod Liver Oil", "DMG", "Glutamine", "Iron", "Iodine", "Melatonin", "Omega 3", "Potassium", "Taurine", "Vitamin D", "Zinc"];
    return ( 
      <IonItemGroup>
        {
          treatments.map(elem => {
            return(
              <IonItem className="new-background-color-3" button href={"treatments/" + elem} onClick={() => {}} detail>
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
  
  export default TreatmentList;
