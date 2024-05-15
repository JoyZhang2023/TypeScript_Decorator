# Assignment: Exploring Decorators in TypeScript 
AD 340 Assignment

## Setup Your Environment
### Check node is installed, run command if not you have to installed it first
```
node -v
```
### Install typescript
```
npm install -g typescript
```
### Install ts-node along with typescript 
```
npm install -g ts-node
```
### To run (in dierctory folder)
```
ts-node index.ts
```

## Assignment Object
Understand and implement decorators in TypeScript to modify and enhance class behavior at design time.

## Tasks
### Implement a Simple Logger Decorator
- Create a file `decoratorsSimpleLogger.ts`.
- Write a class decorator named `SimpleLogger` that logs to the console when a class is instantiated.
- Apply `SimpleLogger` to MyTestClass with a constructor that accepts the class's properties.
### Method Decorator
- Implement a method decorator `LogMethod` that logs method calls of your MyTestClass.
- Apply this decorator to a method in MyTestClass that logs the method.
### Accessor Decorator
- Create an accessor decorator `MyReadOnly` that prevents modification of a property.
- Apply `MyReadOnly` to a getter in MyTestClass.

## Test
![image](https://github.com/JoyZhang2023/TypeScript_Decorator/assets/137982978/a8eb65c9-e765-4928-b664-f1d8612c3dc7)

