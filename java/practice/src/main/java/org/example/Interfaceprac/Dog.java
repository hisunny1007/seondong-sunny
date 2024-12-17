package org.example.Interfaceprac;

public class Dog extends Animal{
    private String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }

    // 추상 메서드 반드시 구현해 줘야돼 (반드시 구현해야돼 말고 일반 클래스랑 다를 게 없음)
    // 반드시 구현하는 건 규칙임. 따라야돼
    @Override
    public void makeSound() {
        System.out.println("wang wang");
    }
}
