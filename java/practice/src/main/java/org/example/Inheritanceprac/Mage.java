package org.example.Inheritanceprac;

public class Mage implements Attackable{

    // 반드시 어택이라는 메서드 가져야돼 (attackable에 들어있는attak을)
    @Override
    public void attack(){

    }

    // 변수갖으면 추상클래스 / 메서드 갖고 잇으면 인터페이스
    // 둘다 강제를 함 . (추상클래스) 상속을 받던 (인터페이스)implement를 하던 부모가 가지고 있는 걸 반드시 니가만들어!!!! 강제사항 갖고 있음
}
