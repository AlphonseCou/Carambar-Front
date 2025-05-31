const { readFile } = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(readFile);

module.exports = async () => {
  const contenu = await readFileAsync("..//Carambar Front/index.html", {
    encoding: "UTF-8",
  });
  return contenu;
};
