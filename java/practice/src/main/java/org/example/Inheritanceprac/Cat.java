package org.example.Inheritanceprac;

public class Cat extends Animal {
//- Animal 클래스를 상속받는  Cat 클래스를 작성하시오.
//- 소리내기 기능을 오버라이딩하시오.
//- 골골대는 기능을 추가하시오.

    public Cat(String name, int age) {
        super(name, age); // super() 부모 클래스의 생성자 호출
        // 자식 클래스 생성자의 맨 첫 줄에서 반드시 호출되어야 함.
//        this.name = name;
//        this.age = age;
    }


    @Override
    public void makeSound() {
        System.out.println(name + "it is cat sound");
    }

    public void purring() {
        System.out.println("cat purring");
    }


}
