package org.example.Inheritanceprac;

public class Animal {
//- 이름, 나이, 소리내기 기능 갖는 Animal 클래스를 구현하시오.


    // 변수는 웬만하면 private으로 하자. (변수는 대부분 숨기는 편)
    protected String name;
    private int age;

    // private이면 상속받을 자식dog, cat이 접근 x이니까 protected로 바꾸는 게 좋음
    // 상속할 땐 protected 쓰는 게 좋아

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void makeSound() {
        System.out.println("makes sound");
    }

    // private 나이 얻기 위해선 getter 필요
    // 공통적 기능 쓰려고

    // 오버라이딩 => 나만의 특징 보여줌(?)
    public int getAge() {
        return age;
    }
}


