import { firestore, Record } from "@firebase";

export const addBubbleRecord = (record: Record) => {
  try {
    return firestore.collection(`bubble`).add(record);
  } catch (err) {
    alert(err);
    return;
  }
};

export const getBubbleRecords = async (category: string, count: number) => {
  try {
    const res = await firestore
      .collection("bubble")
      .where("category", "==", category)
      .where("count", "==", count)
      .orderBy("time")
      .get();

    let result: Record[] = [];

    res.forEach((record) => {
      result.push(record.data() as Record);
    });

    return result;
  } catch (err) {
    alert(err);
    return;
  }
};
