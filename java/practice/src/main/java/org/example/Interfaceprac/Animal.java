package org.example.Interfaceprac;

public abstract class Animal {

    protected String name;
    protected int age;


    // 생성자
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // makeSound라는 추상메서드
    // 추상메서드 => 구현부가 없는 메서드 (중괄호 생략)
    public abstract void makeSound();

//    추상 클래스
//    public abstract class AbstractClass {
//
//		...
//          추상 메서드
//        public abstract void abstractMethod1();
//        public abstract void abstractMethod2(int number);
//        public abstract void abstractMethod3(int number1, int number2);
//    }

    // 추상 메서드 선언했다면 자식 클래스는 해당 메서드 반드시 구현 필요


}
