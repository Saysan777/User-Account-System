// import "../imports/api/fixtures";
// import { links } from "../imports/api/collections/Links.js";
import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  process.env["MONGO_URL"] =
    "mongodb+srv://alok:alok@cluster0.jjo2x.mongodb.net/meteor?retryWrites=true&w=majority";
});
