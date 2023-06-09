class Product {
  _productName: string;
  _price: number;
  get productName(): string {
      return this._productName;
  };
  get price(): number {
      return this._price;
  };
  set setName(name: string) {
    this._productName = name;
  }
  set setPrice(price: number) {
    this._price = price;
  }  

  constructor(productName: string, price: number) {
    this._productName = productName;
    this._price = price;
  };
  getInfo():void {
    console.log(`Товар: ${this._productName}, цена: ${this._price} руб.`);
  }
}

const soap = new Product('Детское мыло', 30);
soap.getInfo();
const toothpaste = new Product('Зубная паста "Лесной бальзам"', 60);
toothpaste.getInfo();


class AbstractSelling {
  _product: Product;
  _quantity: number;

  get product(): Product {
    return this._product;
  };
  set setProduct(product: Product) {
    this._product = product;
  }

  get quantity(): number {
      return this._quantity;
  };
  set setQuantity(quantity: number) {
    this._quantity = quantity;
  }

  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  };

  getPrice(): void {
    const calcSum = this._quantity * this._product._price
    console.log(`Покупается ${this._product._productName}, ${this._quantity} шт., сумма покупки = ${calcSum} руб.`);
  };

  compare(prod: Product): void {
    console.log(`Текущая цена на ${this._product._productName} = ${this._product._price} руб`);
    console.log(`Цена на ${prod.productName} = ${prod.price} руб`);
  };

}

const buy1 = new AbstractSelling(soap, 4);

buy1.getPrice();
buy1.compare(toothpaste)

class discountSelling extends AbstractSelling {
  getPrice(): void {
    const calcSum = this._quantity * this._product._price * 0.9;
    console.log(`Покупка со скидкой ${this._product._productName}, ${this._quantity} шт., сумма покупки = ${calcSum} руб.`);
  };
}

const buy2 = new discountSelling(soap, 4);
buy2.getPrice();

class complexDiscountSelling extends AbstractSelling {
  getComplexDiscount(quantityForDisc: number): void {
    let discountMultiplier: number = 1;
    if (quantityForDisc && this._quantity >= quantityForDisc) {
      discountMultiplier = 0.9;
    }
    const calcSum: number = this._quantity * this._product._price * discountMultiplier;
    console.log(`Покупка со скидкой ${this._product._productName},
    ${this._quantity} шт., сумма покупки = ${calcSum} руб.`);
  };
}
