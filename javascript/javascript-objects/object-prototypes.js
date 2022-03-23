const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function () {
    alert("Hi! I'm " + this.name[0] + ".");
  },

  function Person(first, last, age, gender, interests) {
    // 속성과 메소드 정의
    this.first = first;
    this.last = last;
  //...
  }
};
