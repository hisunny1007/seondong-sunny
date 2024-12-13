package org.example;

public class Person {
    // 이름, 나이를 가지고 있는 Person 클래스를 구현하시오.
    String name;
    int age;

    // 생성자 (클래스와 같은 이름 가지고 있는 함수)
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // 기본값 넣어줄 때 사용함 (string null, int 0이 기본값이지만 내가 직접 기본값 설정 가능)
    public Person() {
        this.name = "basic name";
        this.age = 18;
    }


    String calculateArea() {
        return "name :" + this.name + " age :" + this.age;
    }

}
