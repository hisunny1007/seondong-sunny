package org.example.Interfaceprac;

// 추상 + 클래스 기능 합쳐진 것임
// 추상 클래스야. 즉 너를 상속받는 다른 클래스들에게
// 니가 가지고 있는 것들을 구현하도록 강제할 거야.
// => class 앞에 abstract 키워드 추가해 = 넌 이제부터 추상 클래스야 라는 기능 부여
public abstract class Shape {
    public int width;
    public int height;


    // 내가 구현할 필요 x , 너는 아무 기능하지 않지만 너의 자식들은 너가 갖고 있는 추상메서드들을 반드시 구현해야 돼
    // 추상 : 자식한테 기능 강제해
    public abstract int calculateArea();


    // 구현체가 있는 메서드 (클래스로의 기능만 함)
    public void test() {
        System.out.println("test");
    }



}
