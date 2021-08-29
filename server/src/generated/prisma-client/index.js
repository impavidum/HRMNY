"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Dashboard",
    embedded: false
  },
  {
    name: "Grouping",
    embedded: false
  },
  {
    name: "Card",
    embedded: false
  },
  {
    name: "LayoutLG",
    embedded: false
  },
  {
    name: "LayoutMD",
    embedded: false
  },
  {
    name: "LayoutSM",
    embedded: false
  },
  {
    name: "LayoutXS",
    embedded: false
  },
  {
    name: "Entity",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  },
  {
    name: "Year",
    embedded: false
  },
  {
    name: "Quarter",
    embedded: false
  },
  {
    name: "Month",
    embedded: false
  },
  {
    name: "Week",
    embedded: false
  },
  {
    name: "Day",
    embedded: false
  },
  {
    name: "Hour",
    embedded: false
  },
  {
    name: "Level",
    embedded: false
  },
  {
    name: "ItemType",
    embedded: false
  },
  {
    name: "Source",
    embedded: false
  },
  {
    name: "EntityType",
    embedded: false
  },
  {
    name: "CardType",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/public-petalvulture-610/harmony/dev`
});
exports.prisma = new exports.Prisma();
