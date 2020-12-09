import { firestore } from "../..";
import { Record } from "@firebase";

export const addRecord = (record: Record) => {
  try {
    return firestore.collection("sorting").add(record);
  } catch (err) {
    alert(err);
    return;
  }
};
