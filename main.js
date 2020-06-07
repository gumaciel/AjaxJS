var myPromise = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users/gustavottc");
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Error on request");
        }
      }
    };
  });
};

myPromise()
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.warn(error);
  });
