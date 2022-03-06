const sum = (a: number, b:number) => {
    return a+b
}

const answer = sum(7,5)

console.log(answer)


//Array

let pets: string[] = ['Cat', 'Dog']
let pets2: Array<string> = ['lion', 'dragoin']

//Object

let wizard: object = {
    a: 'John'
}

//Tuple

let basket: [string, number];
basket = ['basketball', 5]

//Enum

enum Size {Small =1, Medium=2, Large=3}
let sizeName: number = Size.Small

//Interface

interface RobotArmy{
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT');
}

//Function

let fightRobotArmy2 = (robots: RobotArmy):void => {
    console.log('FIGHT');
}

//Class

class Animal {
   private sing: string = 'asasasas'; 
    constructor(sound: string){
        this.sing = sound
    }

    greet(): string{
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('arrgh')
// lion.sing

//union

let confused : string | number = 's'


























