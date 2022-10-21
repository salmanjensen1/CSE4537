const fs = require("fs");
const { userInfo } = require("os");

const getCV1 = () => {
  educations = fs.readFileSync("./data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  experiences = fs.readFileSync("./data/workExperience", { encoding: "utf-8" });
    experiences = JSON.parse(String(experiences));

    exps = [];

    for (let key in experiences) {
        exps.push(experiences[key]);
    }
    console.log("*********************HERE**********************")
    console.log(edus)

    return{edus, exps}
};

module.exports = {getCV1}