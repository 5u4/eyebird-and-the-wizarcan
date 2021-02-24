import * as fs from "fs";
import * as path from "path";

const pathToMain = path.join(
  __dirname,
  "../bin",
  "web",
  "Extensions",
  "P2P",
  "B_p2ptools.js"
);

const content = fs.readFileSync(pathToMain).toString();

const res = content
  .split(`peer = new Peer(peerConfig);`)
  .join(
    "peer = new Peer(Math.floor(1000 + Math.random() * 9000), peerConfig);"
  );

fs.writeFileSync(pathToMain, res);
