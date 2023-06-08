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
  changeJob(newJob: string, newSalary: number):void {
    this.role = newJob;
    this._salary = newSalary;
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

const employee1 = new Job('грузчик', 35_000);
const person1 = new Person('Алексей Жуков', employee1);
person1.getToWork();
employee1.changeJob('водитель погрузчика', 39_000);
person1.getToWork();

const employee2 = new Job('охранник', 31_000);
const person2 = new Person('Геннадий Печенкин', employee2);
person2.getToWork();
employee2.changeJob('начальник охраны', 42_000);
person2.getToWork();
