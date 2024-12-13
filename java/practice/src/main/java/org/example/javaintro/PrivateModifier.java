package org.example.javaintro;

public class PrivateModifier {
    public int publicNum = 1;
    // private은 같은 클래스에서만 대상에 접근 가능
    // 다른 클래스인 Main에서는 접근 불가능! => 값 사용하기 위해서는 getter setter 사용
    private int privateNum = 10;

    int defaultNum = 100;

    // getter 값을 읽어옴 /
    // getter 자체는 public으로 공개하여 외부에서 값 조회할 수 있도록 함 (alt + insert)
    public int getPrivateNum() {
        return privateNum;
    }

    // setter 데이터 변화에 대한 트래킹할 수 있다 (밖에서 값 수정 가능)
    public void setPrivateNum(int privateNum) {
        this.privateNum = privateNum;
    }




    public void publicHi() {
        System.out.println("hi, public");
    }

    private void privateHi() {
        System.out.println("hi, private");
    }

    public void sayHi() {
        privateHi();
    }

}
