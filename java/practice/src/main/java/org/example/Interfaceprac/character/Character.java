package org.example.Interfaceprac.character;

public abstract class Character implements DamageTakable {
    protected int level;
    protected int health;
    protected int maxHealth;


    public Character() {
        this.level = 1;
    }

    // 추상 메서드 사용하기 위해서는 클래스 자체도 abstract
    public abstract void attack();

    // (Character target) Character에 있는 클래스들만 target으로 / Character은 타입
    // 만약에 캐릭터와 다른 몬스터와 싸우고 싶다면? => 인터페이스 만들어주는 것도 방법
    public abstract void attack(Character target);
//    public abstract void attack(damageTakable, target);

    public abstract void takeDamage(int amount);

    public abstract void levelUp();

    public void showInfo() {
        System.out.println("level : " + level);
        System.out.println("hp : " + health);
    }


}
