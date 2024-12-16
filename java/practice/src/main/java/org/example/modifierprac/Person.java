package org.example.modifierprac;

public class Person {

// - 같은 클래스 내에서만 접근할 수 있는 이름(String name) 변수를 작성하시오.
// - 모든 곳에서 접근할 수 있는 나이(int age) 변수를 작성하시오.
// - 같은 패키지 내에서만 접근할 수 있는 키(double height) 변수를 작성하시오.
    // 같은 패키지 내에서 => default는 안 적어

    private String name;
    public int age;
    double height;


    public Person(String name, int age, double height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }


// - 같은 클래스 내에서만 접근할 수 있는 “달리기” 메서드를 작성하시오.
    private void run() {
        System.out.println("running - private");
    }

    // private인 run 메서드 실행시키기 위해서
    public void exercise() {
        run();
    }

//- 모든 곳에서 접근할 수 있는 “걷기” 메서드를 작성하시오.
    public void walk() {
        System.out.println("walk - public");
    }


//- 같은 패키지 내에서만 접근할 수 있는 “공부하기” 메서드를 작성하시오.
    void study() {
        System.out.println("study - default");
    }

//- 접근할 수 없는 변수를 사용하기 위한 메서드를 작성하시오.

    // name에 대한 getter
    public String getName() {
        return name;
    }

    // name에 대한 setter
    public void setName(String name) {
        this.name = name;
    }


}
