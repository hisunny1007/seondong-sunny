package org.example.Inheritanceprac;

public class Parent {
    public String publicValue = "public Value";
    private String privateValue = "private Value";
    protected String protectedValue = "protected Value";


    // 부모에 있는 변수. 메서드 -> 상속
    // private는 메서드 콜도 안되기 때문에 protected하면 자식에서 사용 가능

    // 부모에 대한 생성자
    // 생성자는 특별한 메서드여서 자동적으로 처리해주지 않음
    // 매개변수 있는 생성자라면 자식에서 고대로 만들어줘야 함!!
    public Parent(String publicValue) {
        this.publicValue = publicValue;
    }

    // 부모에서도, 자식에서도 메서드 사용 가능함
    public void publicMethod() {
        System.out.println("public method");
    }

    // private은 같은 클래스에서만 접근할 수 있다
    // protected는 같은 패키지에서 접근할 수 있다.
    // => 다른 패키지이더라도 자식 클래스라면 접근할 수 있다
    // default보다 좀 더 넓은 범위임 (default는 같은 패키지에서'만' 접근할 수 있음)
}
