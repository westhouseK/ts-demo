function* g<T extends number>(n :T) {
  while (n < 10) {
      yield n;
      n++
  }
}
for (const n of g(1)) console.log(n)
console.log(1)
