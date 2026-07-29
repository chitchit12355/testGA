const fs = require("fs");

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

fs.writeFileSync("dist/output.txt", "Build output created successfully\n");

console.log("Build completed successfully");
