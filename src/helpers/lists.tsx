import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "src/firebase";
import { MyList } from "src/interfaces/app.interface";

export const getList = async (userId?: string) => {
  let myList: MyList[] = [];
  const querySnapshot = await getDocs(collection(db, "list"));
  querySnapshot.forEach((item) => {
    if (item.data().userId === userId) {
      myList.push(item.data() as MyList);
    }
  });
  console.log(myList);
  //   return myList;
};
