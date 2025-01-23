function getDataFromFile(key) {
  const fileName = map[key];
  if (fileName) {
    fetch(fileName)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching file:', error);
      });
  } else {
    console.log('No such file found for the given key.');
  }
}
