export function debugLog(data: any, label = "Debug") {
  if (process.env.NODE_ENV === "development") {
    console.log(`\n=== ${label} ===`);
    console.log(data);
    console.log("=".repeat(20 + label.length));
  }
}
