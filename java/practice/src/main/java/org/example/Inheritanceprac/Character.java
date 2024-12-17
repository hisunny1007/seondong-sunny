package org.example.Inheritanceprac;

public class Character {
//- 이름, 레벨, 체력을 갖는 Character 클래스를 구현하시오
//- 레벨은 1부터 시작합니다
//- 기본 공격 기능을 구현하시오 (단순 출력)
//- 레벨업 기능을 구현하시오

    protected String name;
    protected int level;
    protected int power;




    public Character(String name) {
        this.name = name;
        this.level = 1;
        this.power = 0;
    }

    public void startFight() {
        System.out.println("fight start");
    }

    public int levelUp(int amount) {
        level += amount;
        return level;
    }





}
