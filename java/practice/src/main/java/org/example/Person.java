package org.example;

public class Person {
    // 이름, 나이를 가지고 있는 Person 클래스를 구현하시오.
    String name;
    int age;

    // 생성자 (클래스와 같은 이름 가지고 있는 함수)
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    String calculateArea() {
        return "name :" + this.name + " age :" + this.age;
    }

}
