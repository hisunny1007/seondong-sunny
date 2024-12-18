package org.example.Interfaceprac.character;

public class Main {
    public static void main(String[] args) {
        Warrior warrior = new Warrior();
        System.out.println(warrior.level);
        System.out.println(warrior.maxHealth);
        System.out.println(warrior.maxRage);
        warrior.attack();
        warrior.increaseRage(150);
        System.out.println(warrior.rage);

        Mage mage = new Mage();
        mage.attack();
        mage.showInfo();
        mage.takeDamage(40);
        System.out.println(mage.health);
        mage.attack(warrior);
        warrior.showInfo();



//        warrior.attack();
//
//        warrior.increaseRage(100);
//
//        warrior.attack();
//
//        Mage mage = new Mage();
//        mage.showInfo();
//        warrior.showInfo();
//
//
//        // 클래스는 자료형의 타입이기 때문에 넣을 수 있어
//        // (mage)는 character의 역할을 함. mage로서의 역할이 아니라
//        warrior.attack(mage);
//        mage.showInfo();
//
//        Warrior warrior2 = new Warrior();
//
//        // 둘다 캐릭터 상속받기 때문에 charac
//        warrior.attack(warrior2);
//        warrior.attack(mage);
//        mage.showInfo();

    }
}
