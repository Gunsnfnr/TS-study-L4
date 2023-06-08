class Job {
    private role: string;
    private salary: number;
    get getSalary(): number {
        return this.salary;
    };

  constructor(role: string, salary: number) {
    this.role = role;
    this.salary = salary;
  };
  
  public work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this.role}`);
}

}

const employee1 = new Job('грузчик', 35_000);
employee1.work('Иван Семенов');

class Person {
  private Job: string;
  private name: string;
  private salary: number;
  set setJob(Job: string) {
    this.Job = Job;
  }
  getSalary(): number {
    return this.salary;
  };
  constructor(name: string, Job: string, salary: number) {
    this.name = name;
    this.Job = Job;
    this.salary = salary;
  };
  public work(name: string): void {
    console.log(`${this.name} сейчас работает как ${this.Job}, з/п = ${this.salary}руб.`);
  }
}

const person1 = new Person('Алесей Жуков', 'водитель', 45_000);
