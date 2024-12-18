package org.example.Interfaceprac.character;

public class Mage extends Character {

    public Mage() {
        this.maxHealth = 70;
        this.health = 70;
    }

    @Override
    public void attack() {
        System.out.println("mage attack!");
    }

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

    }
}
