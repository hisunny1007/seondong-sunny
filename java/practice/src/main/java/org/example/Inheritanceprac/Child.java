package org.example.Inheritanceprac;

public class Child extends Parent {
    public String childValue = "child Value";


    // 부모에 있는 생성자를 고대로 만들어줘야함. 자동으로 상속x
    // 부모의 형식만 따라옴
    public Child(String publicValue) {
        // super는 부모. super()는 부모의 생성자
        // this this()랑 똑같은 거임 / this는 나
        // 부모의 생성자를 호출해서 부모가 만들어준 것처럼
        super(publicValue);
    }

    // 자식만의 생성자 만들기
    public Child(String publicValue, String childValue) {
        // super 먼저 써야돼 / 순서 바꾸면 x

        super(publicValue);
        this.childValue = childValue;


    }



    // 부모한테 있는 거 다 할 수 있고 + 나만 메서도도 만들 수 있음
    // 부모에서는 childmethod 메서드 부를 수 없음.
    // 자식 클래스만의 메서드임
    public void childMethod() {
        System.out.println("child Method");
    }


    // 부모에서 만든 메서드를 자식이 덮어씌을 수 있음 = 메서드 오버라이딩
    // 부모의 함수를 자식이 재정의함.
    // 메서드 오버라이딩(재정의) @Override => 명시적으로 override한다는 표현
    // 부모 메서드를 내가 가져와서 재정의한다!!는 표히 써주면 좋아

    @Override
    public void publicMethod() {
        super.publicMethod(); // 나의 부모에게 들어있는 publicmethod 실행 // public method
        System.out.println(super.publicValue);
//        System.out.println(super.);
//        System.out.println(super.);

        System.out.println("child public method"); // child public method
    }


}
