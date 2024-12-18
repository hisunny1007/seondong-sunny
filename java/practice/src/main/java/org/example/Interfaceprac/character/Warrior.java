package org.example.Interfaceprac.character;

public class Warrior extends Character implements RageUsable{

    protected int rage;
    protected int maxRage;


    // 기본 생성자(매개변수 없는 생성자)는 super()안 써도 알아서 들어가긴 해 / 매개변수 있는 생성자는 써줘야 돼
    public Warrior() {
//        super(); level = 1까지 자동으로 불러옴
        this.maxHealth = 120;
        this.health = 120;
        this.maxRage = 100;
        this.rage = 0;

    }

//    원래는 이렇게 하는 게 더 나아
//    public Warrior(int maxHealth) {
//        super(maxHealth);
//        this.maxRage = 100;
//    }

    @Override
    public void attack() {
        System.out.println("warrior attack!");
        increaseRage();
        if (rage == maxRage) {
            rageAttack();
        }
    }


    // (Character target)
    // charactet자리에 character을 상속받는 다른것들 들어가. 근데 character가 가진 기능만 실행돼
    @Override
    public void attack(Character target) {
        System.out.println("attack" + target);
        target.takeDamage(20);
    }

    @Override
    public void takeDamage(int amount) {
        health -= amount;
    }

    @Override
    public void levelUp() {
        level += 1;
        System.out.println("level up");
        health += 30;
    }


    @Override
    public void showInfo() {
        super.showInfo();
        System.out.println("rage : " + rage);
    }


    // 인터페이스에서 온 기능 / 인터페이스에서 정의된 메서드 무조건 다 사용해야 됨. 일부만 사용하는 건 x
    // 인터페이스에 있는 메서드는 매개변수 없음/ 여기엔 있으면 안 돼/ amount를 인터페이스에 넣거나 warrior에 빼거나
    // 최악의 선택은 오버라이드 빼는 것. (하지마)
    @Override
    public void increaseRage(int amount) {
//        rage += 10;
//        if (rage >= maxRage) {
//            rage = maxRage;
//        }
        rage = Math.min(maxRage, rage + amount);
        // Math.min(a, b) 더 작은 값 반환함
    }

    @Override
    public void increaseRage() {
        rage = Math.min(maxRage, rage + 10);
    }

    @Override
    public void rageAttack() {
        System.out.println("rage Attack!");
        rage = 0;
    }


}
