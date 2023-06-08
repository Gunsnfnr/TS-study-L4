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
    console.log(`${personName} сейчас работает как ${this.role}`);
}

}

const employee1 = new Job('грузчик', 35_000);
employee1.work('Иван Семенов');

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
    this.job.work('name');
  }
}

const person1 = new Person('Алесей Жуков', employee1);
person1.getToWork();
