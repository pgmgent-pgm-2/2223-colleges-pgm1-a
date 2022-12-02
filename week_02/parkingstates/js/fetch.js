const loadJSONByCallback = (url, succesHandler, errorHandler) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.response);
      succesHandler && succesHandler(data);
    } else {
      errorHandler && errorHandler(xhr.status);
    }
  };
  xhr.onerror = () => {
    errorHandler && errorHandler('Network Error!');
  }
  xhr.send(null);
}