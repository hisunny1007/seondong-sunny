package org.example.Inheritanceprac;

public class Dog extends Animal {
//- Animal 클래스를 상속받는 Dog 클래스를 작성하시오.
//- 소리내기 기능을 오버라이딩 하시오.
//- 품종 변수를 추가하시오.

    private String breed;

    // 생성자를 만들어라!!
//    (animal에 생성자 없거나 기본 생성자만 있으면 문제 없음)
    // 근데 animal에는 매개변수 2개 .. animal의 생성자 가져야됨

    public Dog(String name, int age, String breed) {
        super(name, age); // 부모 클래스의 생성자 호출
        this.breed = breed;
    }

    @Override
    public void makeSound() {
//        super.soundOn(); // 부모의 무언가를 활용할 때 super 사용함
//        System.out.println(name + "it is dog sound"); 부모에 name이 private해서 이건 불가능 => 부모 name을 protected로 바꾸면 가능
        System.out.println(name + "it is dog sound");
    }

}


