package org.example.etc;


public class GenericPrac<T> {
//     <T , V>
    // 제네릭은 클래스나 메서드에서 사용할 데이터 타입을 미리 정하지 않고, 사용하는 시점에 타입을 지정할 수 있도록 하는 기능

    //    정의 단계: 타입을 미리 정하지 않고, **제네릭 타입 매개변수(T)**로 자리를 비워둡니다.
    //→ "타입을 미리 정하지 않는다."

    // 제네릭은 상자에 넣을 물건의 타입을 미리 정할 수 있게 해주는 것
    //    사용 단계: 사용자가 특정 타입(String, Integer 등)을 명시적으로 지정합니다.
    //→ "타입을 사용하는 시점에 정한다." (Main에서)


    // type 명시하는 T
// 내가 갖고 있는 변수의 타입을 지정할 거야. 클래스의 생성에서
// 타입이라고 하는 것을 마치 변수스럽게 T로 다루고 , 그 변수는 인스턴스 생성할 때 쓰기 때문에 클래스 차원에서 씀


    private T value;
//    public V value2;

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }


//    public int number;
//
//    public int getNumber() {
//        return number;
//    }
//
//    public void setNumber(int number) {
//        this.number = number;
//    }

    // 타입을 동적으로 처리해주는 놈,
    //클래스나 메서드에서 타입을 널널하게 해주는 것 : 제네릭
}
