class Student{
	static count =0;
	constructor(name, age, phNumber, boardMarks){
		this.name = name;
		this.age=age;
		this.phNumber = phNumber;
		this.boardMarks = boardMarks;
		Student.count+=1;
	}

	eligible(){
		if(this.boardMarks >40)
			console.log("eligible");
		else
			console.log("Not eleigible");
	}
	countObjects(){
		return Student.count;
	}
    eligibleForPlacements(minMarks){
        return (age) =>{if(this.boardMarks>minMarks && this.age > age) return true;
        else false;};
    }
}


let st1 = new Student("Ramesh",22,0,45);
let st2 = new Student("Suresh",21,0,55 );
let st3 = new Student("Jignesh",22,0,36);
let st4 = new Student("Priyansh",23,0,20);
let st5 = new Student("Deva","20",0,85);

console.log(st5.countObjects());
st1.eligible();
console.log(st1.boardMarks);
let arr = [st1, st2, st3, st4, st5];
for(let i of arr){
    if(i.eligibleForPlacements(50)(20))
    console.log(i.name);
}
