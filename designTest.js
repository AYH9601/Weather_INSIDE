let girl = { // 객체 literal이다. 
    name: 'sinri',
    age: 23,
    showName(){
        console.log(this.name);
    },
    showAge : function(){
        console.log(this.age);
    }
}
girl.showName();
girl.showAge();