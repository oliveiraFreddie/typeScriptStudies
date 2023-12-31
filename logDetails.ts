//type alias
type Uid = number | string; // criando um type personalizado para reuso

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`A user with ${uid} has a name as ${user}`);
}

type Platform = "Windows" | "Linux" | "Mac Os" | "ios";

function renderPlatform(platform: Platform) {
  return platform;
}

renderPlatform("ios");

logDetails(123, "sapato");
logDetails("123", "sapato");

logInfo(123, "William");
logInfo("123", "William");
