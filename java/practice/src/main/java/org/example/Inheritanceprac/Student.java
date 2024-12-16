package org.example.Inheritanceprac;

// 부모 class가 가지고 있는 변수나 메서드를 고대로 사용 가능 extends
// 사람은 이름과 나이 갖고 있음
// 이걸 확장해서 (변수와 메서드들을 확장) => student

// person 클래스가 부모 클래스 / student가 자식 클래스
// 자식 클래스는 부모 클래스의 모든 변수와 메서드를 상속받음(사용 가능)
// 필요에 따라 확장하거나, 부모 클래스의 메서드를 덮어씌울 수 있음(overriding)

public class Student extends Person {
//    String name;
//    int age;
    int studentNum;

    // 부모class에서 정의한 걸 덮어씌울 수 있음
    public static void introduce() {
        System.out.println("hello i'm student");
    }

    public void study() {
        System.out.println("studying");
    }


}
