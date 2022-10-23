const fs = require("fs");
const { userInfo } = require("os");
const {getCV1} = require("./extract")
const getCV = (req, res) => {
  // educations = fs.readFileSync("./data/education", { encoding: "utf-8" });
  // educations = JSON.parse(String(educations));

  // edus = [];

  // for (let key in educations) {
  //   edus.push(educations[key]);
  // }

  // experiences = fs.readFileSync("./data/workExperience", { encoding: "utf-8" });
  //   experiences = JSON.parse(String(experiences));

  //   exps = [];

  //   for (let key in experiences) {
  //       exps.push(experiences[key]);
  //   }

    // userInfo = fs.readFileSync("./data/userInfo", { encoding: "utf-8" });
    // userInfo = JSON.parse(String(userInfo));
    const {edus, exps} = getCV1()
    res.render("cv", {educations: edus, experiences: exps})

};

module.exports = { getCV: getCV };