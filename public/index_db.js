const request = window.indexedDB.open("budget_DB", 1);

// Create schema
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Creates an object store with a amountID keypath that can be used to query on.
  const budgetStore = db.createObjectStore("budget_DB", {
    keyPath: "amountID",
  });
  // Creates a statusIndex that we can query on.
  budgetStore.createIndex("statusIndex", "status");
};

// Opens a transaction, accesses the budget_DB objectStore and statusIndex.
request.onsuccess = () => {
  const db = request.result;
  const transaction = db.transaction(["budget_DB"], "readwrite");
  const budgetStore = transaction.objectStore("budget_DB");
  const statusIndex = budgetStore.index("statusIndex");

  // Adds data to our objectStore
  budgetStore.add({
    amountID: " how do i get the id=t-name value here????????",
    status: " how do i get the id=t-amount value here?????????",
  });

  // Return an item by keyPath
  const getRequest = budgetStore.get("1");
  getRequest.onsuccess = () => {
    console.log(getRequest.result);
  };

  // Return an item by index
  const getRequestIdx = statusIndex.getAll("complete");
  getRequestIdx.onsuccess = () => {
    console.log(getRequestIdx.result);
  };
};
