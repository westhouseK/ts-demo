import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { Product } from "./product.model";

const products = [
  { title: "bbb", price: 200 },
  { title: "ccc", price: 300 },
];

const l = plainToClass(Product, products);

const a = new Product("", -1000);
validate(a).then((errors) => {
  if (errors.length > 0) {
    console.log("error");
    console.log(errors);
  } else {
    console.log(a.getInfomation());
  }
});

for (const prod of l) {
  console.log(prod.getInfomation());
}
