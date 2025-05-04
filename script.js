fetch("https://script.google.com/macros/s/AKfycbxxxxx/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ updates }),
});
