package org.example.Inheritanceprac;

public class Warrior extends Character {

    // 최대 100 (분노게이지 관련)
    protected static final int MAX_FUEL = 100;

    public Warrior(String name) {
        super(name);
        this.power = 120;
    }


    // 분노게이지 관련 기능 메서드 (최대 100)


}
