// class decorator logs to console when a class is instantiated
function SimpleLogger(constructor: Function) {
    console.log("New class is instantiated.");
}

// method decorator logs method calls of MyTestClass
function LogMethod(target: any, key: string, descriptor: PropertyDescriptor){
    console.log("A method is called");
}

// accessor decorator prevents modification of a property
function MyReadOnly(target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.set= ()=> null;
    console.log("Read only decorator working.");
}

/**
 * test class with 2 properties and 2 get method
 */
@SimpleLogger
class MyTestClass {
    public _name: string;
    private classCode: number;

    constructor(name: string, classCode: number) {
        this._name = name;
        this.classCode = classCode;
    }

    @LogMethod
    greet() {
        console.log("New Class has been set up!");
    }

    @MyReadOnly
    get name() {
        return this._name;
    }
}    

// test decorator
const MyClass = new MyTestClass("Mobile Development", 340);
const className = MyClass.name;
