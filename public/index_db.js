const request = window.indexedDB.open("budget_DB", 1);
let db;

// Create schema
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Creates an object store with a amountID keypath that can be used to query on.
  const budgetStore = db.createObjectStore("budget_DB", {
    keyPath: "id",
    autoIncrement: true,
  });
  // Creates a amountIndex that we can query on.
  budgetStore.createIndex("amountIndex", "amount");
};

// Opens a transaction, accesses the budget_DB objectStore and amountIndex.
request.onsuccess = () => {
  db = request.result;
};

function saveRecord(data) {
  const transaction = db.transaction(["budget_DB"], "readwrite");
  const budgetStore = transaction.objectStore("budget_DB");

  // Adds data to our objectStore
  budgetStore.add(data);
  console.log(data);
}

// ononline version
window.ononline = (event) => {
  console.log("You are now connected to the network.");
};
