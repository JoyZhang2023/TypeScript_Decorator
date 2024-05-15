// class decorator logs to console when a class is instantiated
function SimpleLogger(constructor: Function) {
    console.log("New class is instantiated.");
}



/**
 * test class with 2 properties and 2 get method
 */
@SimpleLogger
class MyTestClass {
    name: string;
    classCode: number;

    constructor(name: string, classCode: number) {
        this.name = name;
        this.classCode = classCode;
    }

    getName(): string {
        return this.name;
    }

    getClassCode(): number {
        return this.classCode;
    }
}

// test decorator
const MyClass = new MyTestClass("Mobile Development", 340);
