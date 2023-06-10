class Product {
  private _productName: string;
  private _price: number;
  get productName(): string {
      return this._productName;
  };
  get price(): number {
      return this._price;
  };
  set productName(name: string) {
    this._productName = name;
  }
  set price(price: number) {
    this._price = price;
  }  
  constructor(productName: string, price: number) {
    this._productName = productName;
    this._price = price;
  };
}

abstract class AbstractSelling {
  private _product: Product;
  private _quantity: number;

  get product(): Product {
    return this._product;
  };
  set product(product: Product) {
    this._product = product;
  }

  get quantity(): number {
      return this._quantity;
  };
  set quantity(quantity: number) {
    this._quantity = quantity;
  }

  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  };

  abstract getPrice():void;

  compare(a: Product, b:Product) {};
} 

class discountSelling extends AbstractSelling {
  getPrice(): void {
    let discountMultiplier: number = 0.9;
    const calcSum: number = this.quantity * this.product.price * discountMultiplier;
    console.log(`Покупка со скидкой ${this.product.productName},
    ${this.quantity} шт., сумма покупки = ${calcSum} руб.`);
  };
  compare = (a: Product, b:Product) => (a.price < b.price) ? 1 : -1;
}

class complexDiscountSelling extends AbstractSelling {
  _quantityForDisc: number;

  constructor(product: Product, quantity: number, quantityForDisc: number) {
    super(product, quantityForDisc);
    this.product = product;
    this.quantity = quantity;
    this._quantityForDisc = quantityForDisc;
  };

  getPrice(): void {
    let discountMultiplier: number = 1;

    if (this.quantity >= this._quantityForDisc) {
      discountMultiplier = 0.9;
    }
    const calcSum: number = this.quantity * this.product.price * discountMultiplier;
    console.log(`Покупка со скидкой ${this.product.productName},
    ${this.quantity} шт., сумма покупки = ${calcSum} руб.`);
  };
}
const goodsArray: Product[] = [];
const good1: Product = new Product('Мыло', 30);
goodsArray.push(good1);
const good2: Product = new Product('Зубная паста', 60);
goodsArray.push(good2);
const good3: Product = new Product('Полотенце', 200);
goodsArray.push(good3);
const good4: Product = new Product('Зубная нить', 150);
goodsArray.push(good4);
const good5: Product = new Product('Шампунь', 100);
goodsArray.push(good5);
const good6: Product = new Product('Ватные палочки', 120);
goodsArray.push(good6);
const good7: Product = new Product('Лак для волос', 140);
goodsArray.push(good7);
const good8: Product = new Product('Салфетки', 40);
goodsArray.push(good8);

const purchase1:discountSelling = new discountSelling(good1, 4);
purchase1.getPrice();

const purchase2:discountSelling = new discountSelling(good2, 1);
purchase2.getPrice();

const purchase3:discountSelling = new discountSelling(good3, 3);
purchase3.getPrice();

const purchase4:discountSelling = new discountSelling(good4, 7);
purchase4.getPrice();

const purchase5:complexDiscountSelling = new complexDiscountSelling(good5, 4, 4);
purchase5.getPrice();

const purchase6:complexDiscountSelling = new complexDiscountSelling(good6, 2, 4);
purchase5.getPrice();

const purchase7:complexDiscountSelling = new complexDiscountSelling(good7, 4, 2);
purchase5.getPrice();

const purchase8:complexDiscountSelling = new complexDiscountSelling(good8, 5, 4);
purchase5.getPrice();


console.log('goodsArray: ', goodsArray);
const goodsArraySorted = goodsArray.sort(purchase1.compare);
console.log('goodsArraySorted: ', goodsArraySorted);
