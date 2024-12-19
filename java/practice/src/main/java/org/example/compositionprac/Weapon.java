package org.example.compositionprac;

public class Weapon {
    protected int power;
    protected int stemina;

    public Weapon(int power, int stemina) {
        this.power = power;
        this.stemina = stemina;
    }
}

// weapon is gun / weapon is sword
// weapon 부모고 gun이랑 sword가 자식임
