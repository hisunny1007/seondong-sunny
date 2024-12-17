package org.example.Interfaceprac;


// Grrable이란 인터페이스를 구현 implements
public class Cat extends Animal implements Grrable{

    public Cat(String name, int age) {
        super(name, age);
    }


    // 추상 클래스의 추상 메서드 => 추상 클래스를 상속한 자식 클래스에서 재정의(오버라이딩)함
    @Override
    public void makeSound() {
        System.out.println("meow"); // 구현부 재정의
    }


//    인터페이스의 메서드는 모두 추상 메서드이기 때문에
//    구현 클래스에서는 이를 반드시 재정의해야 한다.
    @Override
    public void grr() {
        System.out.println("Grr");
    }
}
