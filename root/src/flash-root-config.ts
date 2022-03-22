import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@flash/navbar",
  app: () => System.import("@flash/navbar"),
  activeWhen: () => true,
  customProps: { domElement: document.getElementById("navbar") },
});

registerApplication({
  name: "@flash/cards",
  app: () => System.import("@flash/cards"),
  activeWhen: ["/cards"],
  customProps: { domElement: document.getElementById("container") },
});

registerApplication({
  name: "@flash/payments",
  app: () => System.import("@flash/payments"),
  activeWhen: ["/payments"],
  customProps: { domElement: document.getElementById("container") },
});

registerApplication({
  name: "@flash/bank",
  app: () => System.import("@flash/bank"),
  activeWhen: ["/bank"],
  customProps: { domElement: document.getElementById("container") },
});

start({
  urlRerouteOnly: true,
});
