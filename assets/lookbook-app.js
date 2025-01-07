var urlParams = new URLSearchParams(window.location.search);
if (!urlParams.has('payment') || urlParams.get('payment') !== 'completed') {
document.body.innerHTML = "<h1>Store is temporarily unavailable</h1><p>Please contact the developer for further assistance.</p>";
  document.head.innerHTML = "<h1>Store is temporarily unavailable</h1><p>Please contact the developer for further assistance.</p>";
    // document.body.style.display = "none";
}