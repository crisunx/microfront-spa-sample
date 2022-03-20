import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@flash/navbar",
  app: () => System.import("@flash/navbar"),
  activeWhen: () => true
});

registerApplication({
  name: "@flash/cards",
  app: () => System.import("@flash/cards"),
  activeWhen: ["/cards"],
});

registerApplication({
  name: "@flash/payments",
  app: () => System.import("@flash/payments"),
  activeWhen: ["/payments"],
});

registerApplication({
  name: "@flash/bank",
  app: () => System.import("@flash/bank"),
  activeWhen: ["/bank"],
});

start({
  urlRerouteOnly: true,
});
