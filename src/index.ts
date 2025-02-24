export { helloWorld } from "./example";

function onOpen(
  e:
    | GoogleAppsScript.Events.DocsOnOpen
    | GoogleAppsScript.Events.SlidesOnOpen
    | GoogleAppsScript.Events.SheetsOnOpen
    | GoogleAppsScript.Events.FormsOnOpen,
): void {
  console.log(e);
}

function onEdit(e: GoogleAppsScript.Events.SheetsOnEdit): void {
  console.log(e);
}

function onInstall(e: GoogleAppsScript.Events.AddonOnInstall): void {
  console.log(e);
}

function doGet(e: GoogleAppsScript.Events.DoGet): void {
  console.log(e);
}

function doPost(e: GoogleAppsScript.Events.DoPost): void {
  console.log(e);
}

export { onOpen, onEdit, onInstall, doGet, doPost };
