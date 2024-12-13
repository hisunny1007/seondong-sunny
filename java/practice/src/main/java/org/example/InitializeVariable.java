package org.example;

public class InitializeVariable {
    public static void main(String[] args) {
        // static 메서드이기 때문에 인스턴스 필요 없음

        V1 v1 = new V1();
        System.out.println(v1.value);
        System.out.println();


        V2 v2 = new V2();
        System.out.println(v2.value);
        System.out.println();

        V3 v3 = new V3();
        System.out.println(v3.value);
    }
}

// 명시적인 초기화
class V1 {
    // 생성자는 인스턴스를 생성할 때 넣는 거기 때문에 static 변수는 여기다밖에 값을 못넣음
    static int staticValue = 30;

    int value = 10;
    String word = "Text";
}

class V2 {
    int value;
    String word;


    public V2() {
        this(10, "Text");
    }

    public V2(int value, String word) {
        this.value = value;
        this.word = word;
    }
}

// 인스턴스 초기화 블록 => 클래스 변수를 초기화할 때 사용됨
class V3 {
    static int staticValue;
    int value;
    String word;

    // 스태틱 변수를 위한 초기화 블록
    static {
        if (true) {
            staticValue = 30;
        } else {
            staticValue = 50;
        }
    }

    // 중괄호 넣어주면 인스턴스 초기화 블록이 됨
    // 자기만의 스코프 갖는 실행 가능한 코드 / for문, if문도 사용 가능함
    {
        if (true) {
            this.value = 10;
        } else {
            this.value = 12;
        }

        this.value = 10;
        this.word = "Text";
    }

}