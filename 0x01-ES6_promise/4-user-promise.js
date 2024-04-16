export default function sugnUpUser(firstName, lastName) {
  return new Promise((resolve) => resolve({ firstName, lastName }));
}
