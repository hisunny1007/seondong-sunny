package org.example.compositionprac;

public class Main {
    public static void main(String[] args) {

        Pencil red = new Pencil("red");
        Person sunny = new Person("sunny", red);

        sunny.write();

        Pencil blue = new Pencil("blue");

        sunny.setPencil(blue);
//        sunny.pencil = blue;

        sunny.write();
        System.out.println();

        Pencil yellow = new Pencil("yellow");

        Pencil[] manyPencil = {red, blue, yellow};
        Person lynda = new Person("lynda", manyPencil);

        lynda.writeMany();


        Address address = new Address("seoul", "dobongro");
        Building building = new Building(address);

        building.showAddress();

        System.out.println();

        Address seoul = new Address("seoul", "mapo-gu");


    }
}
