import { firestore, Record } from "@firebase";

export const addRecord = (record: Record, sort: string) => {
  try {
    return firestore.collection(sort).add(record);
  } catch (err) {
    alert(err);
    return;
  }
};

export const getRecords = async (
  category: string,
  count: number,
  sort: string
) => {
  try {
    const res = await firestore
      .collection(sort)
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
    console.log(err);
    return;
  }
};

export const getCountOverall = async (count: number, sort: string) => {
  try {
    const res = await firestore
      .collection(sort)
      .where("count", "==", count)
      .orderBy("time")
      .get();

    let result: Record[] = [];

    res.forEach((record) => {
      result.push(record.data() as Record);
    });

    return result;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const getCategoryOverall = async (category: string, sort: string) => {
  try {
    const res = await firestore
      .collection(sort)
      .where("category", "==", category)
      .orderBy("time")
      .get();

    let result: Record[] = [];

    res.forEach((record) => {
      result.push(record.data() as Record);
    });

    return result;
  } catch (err) {
    console.log(err);
    return;
  }
};
