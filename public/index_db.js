const request = window.indexedDB.open("budget_DB", 1);

// Create schema
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Creates an object store with a amountID keypath that can be used to query on.
  const toDoListStore = db.createObjectStore("budget_DB", {
    keyPath: "amountID",
  });
  // Creates a statusIndex that we can query on.
  toDoListStore.createIndex("statusIndex", "status");
};

// Opens a transaction, accesses the budget_DB objectStore and statusIndex.
request.onsuccess = () => {
  const db = request.result;
  const transaction = db.transaction(["budget_DB"], "readwrite");
  const toDoListStore = transaction.objectStore("budget_DB");
  const statusIndex = toDoListStore.index("statusIndex");

  // Adds data to our objectStore
  toDoListStore.add({
    amountID: " how do i get the id value here????????",
    status: " how do i get the id value here?????????",
  });

  // Return an item by keyPath
  const getRequest = toDoListStore.get("1");
  getRequest.onsuccess = () => {
    console.log(getRequest.result);
  };

  // Return an item by index
  const getRequestIdx = statusIndex.getAll("complete");
  getRequestIdx.onsuccess = () => {
    console.log(getRequestIdx.result);
  };
};

// if (!("indexedDB" in window)) {
//   console.log("Indexed not in windows");
// }
// console.log("Indexed in windows");
// let request = indexedDB.open("budget_db", 1);

// // console.log(request);

// request.onupgradeneeded = (event) => {
//   console.log("I am in the Db logic");
//   let db = event.target.result;
//   let object_store = db.createObjectStore("transactions", { keyPath: "tname" });
// };

// request.onsuccess = (event) => {
//   console.log("I am in the success logic");
//   let db = request.result;
//   let transaction = db.transaction("transactions", "readwrite");
//   console.log(transaction);
//   let object_store = transaction.objectStore("transactions");

//   object_store.add({
//     tname: "????",
//     amount: 1.45,
//   });
// };
