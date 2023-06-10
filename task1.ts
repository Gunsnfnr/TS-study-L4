class Job {
    private _role: string;
    private _salary: number;
    get salary(): number {
        return this._salary;
    };

  constructor(role: string, salary: number) {
    this._role = role;
    this._salary = salary;
  };
  
  public work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this._role}, его з/п = ${this.salary}`);
}
}

class Person {
  private _job: Job;
  private _name: string;
  set job(job: Job) {
    this._job = job;
  }
  getSalary(): number {
    return this._job.salary;
  };
  constructor(name: string, job: Job) {
    this._name = name;
    this._job = job;
  };
  getToWork():void {
    this._job.work(this._name);
  }
}

const position1 = new Job('грузчик', 35_000);
const person1 = new Person('Алексей Жуков', position1);
person1.getToWork();

const position2 = new Job('водитель погрузчика', 39_000);
person1.job = position2;
person1.getToWork();

const position3 = new Job('охранник', 31_000);
const person2 = new Person('Геннадий Печенкин', position2);
person2.getToWork();

const position4 = new Job('начальник охраны', 42_000);
person2.job = position4;
person2.getToWork();
