class Job {
    private role: string;
    private _salary: number;
    get salary(): number {
        return this._salary;
    };

  constructor(role: string, salary: number) {
    this.role = role;
    this._salary = salary;
  };
  
  public work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this.role}, его з/п = ${this.salary}`);
}
}

class Person {
  private job: Job;
  private name: string;
  set setJob(job: Job) {
    this.job = job;
  }
  getSalary(): number {
    return this.job.salary;
  };
  constructor(name: string, job: Job) {
    this.name = name;
    this.job = job;
  };
  getToWork():void {
    this.job.work(this.name);
  }
}

const position1 = new Job('грузчик', 35_000);
const person1 = new Person('Алексей Жуков', position1);
person1.getToWork();

const position2 = new Job('водитель погрузчика', 39_000);
person1.setJob = position2;
person1.getToWork();

const position3 = new Job('охранник', 31_000);
const person2 = new Person('Геннадий Печенкин', position2);
person2.getToWork();

const position4 = new Job('начальник охраны', 42_000);
person2.setJob = position4;
person2.getToWork();
