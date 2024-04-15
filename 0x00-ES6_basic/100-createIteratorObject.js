export default function createIteratorObject(report) {
  const vals = [];
  for (const key of Object.keys(report.allEmployees)) {
    vals.push(...report.allEmployees[key]);
  }
  return vals;
}
