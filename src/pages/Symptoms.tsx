import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonMenu,
  IonSelect,
  IonSelectOption,
  IonList,
  IonLabel,
  IonItem,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import SymptomList from "../components/SymptomList";
import "./Tab3.css";
import { ellipsisVertical } from "ionicons/icons";

const Symptoms: React.FC = () => {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });
  const [treatType, setTreatType] = useState<string>("all");
  const [sort, setSort] = useState<string>("overall");

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="new-background-color">
          <IonTitle
            style={{
              padding: "2px",
              color: "var(--light-blue-1)",
              textAlign: "center",
              fontSize: 24,
              height: "65px",
            }}
          >
            Symptoms
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonMenu side="start" menuId="first">
        <IonHeader>
          <IonToolbar className="new-background-color">
            <IonTitle>Filter Options</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel style={{ fontWeight: "bold" }}>
                Treatment Types
              </IonLabel>
              <IonSelect
                value={treatType}
                onIonChange={(e) => setTreatType(e.detail.value)}
              >
                <IonSelectOption value="all">All</IonSelectOption>
                <IonSelectOption value="psych">
                  Psych and Seizeure
                </IonSelectOption>
                <IonSelectOption value="nutraceutical">
                  Nutraceuticals
                </IonSelectOption>
                <IonSelectOption value="diet">Diets</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel style={{ fontWeight: "bold" }}>Sort By:</IonLabel>
              <IonSelect
                value={sort}
                onIonChange={(e) => setSort(e.detail.value)}
              >
                <IonSelectOption value="overall">Best Overall</IonSelectOption>
                <IonSelectOption value="net">Net Benefit</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
          <IonButton
            slot="end"
            color="light-blue-1"
            fill="clear"
            onClick={(e: any) => {
              e.persist();
              setShowPopover({ showPopover: true, event: e });
            }}
          >
            <IonIcon
              slot="icon-only"
              icon={ellipsisVertical}
              style={{ color: "#e7eff6" }}
            />
          </IonButton>
        </IonContent>
      </IonMenu>

      <IonContent fullscreen className="new-background-color-2">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Treatments for Symptoms</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SymptomList />
      </IonContent>
    </IonPage>
  );
};

export default Symptoms;
