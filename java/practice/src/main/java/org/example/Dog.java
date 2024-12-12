package org.example;

public class Dog {
    // 견종, 이름을 가지고, "앉아", "손"을 할 수 있는 Dog 클래스 구현
    String breed;
    String name;

    // 생성자
    public Dog(String breed, String name) {
        this.breed = breed;
        this.name = name;
    }

    // 함수는 무언가의 기능을 하는 것임. 함수를 만들기 전에 어떤 기능을 하는지 한번 확인해 봐.

    // 아무것도 입력 안 받을 거야 / 손이라는 걸 출력할 거야 / 아무것도 return 안 할 거야
    // 함수 만들기 전에 미리 생각을 하고 만드는 것이 "무조건" 좋다

    // void : 자바에서 반환값이 없다 / 메서드가 어떤 값을 돌려주지 않고 단순히 동작만 수행할 때
    // 값을 반환하지 않는 경우 void 사용
    void giveHand() {
        System.out.println("Give Me Hand");
    }

    // void => return 값 없음
    void sitDown() {
        System.out.println("Sit Down");
        System.out.println("My dog" + this.name + "Sit Down");
    }

}
