package org.example.Inheritanceprac;

public class Main {
    public static void main(String[] args) {
        Person.introduce();
        Student.introduce();

        Student s = new Student();
        s.study();


        System.out.println();
        System.out.println("parent");
        Parent parent = new Parent("parent Public value");
        System.out.println(parent.publicValue);
//        System.out.println(parent.privatecValue);
        System.out.println(parent.protectedValue);
        parent.publicMethod();


        System.out.println();
        // protected : 같은 패키지에서 접근할 수 있다. 다른 패키지이더라도 자식 클래스라면 접근할 수 있다
        // => 자식에서 사용 가능하다

        System.out.println("child");
        Child child = new Child("child Public value");
//        Child child = new Child("child Public value, child value");
        System.out.println(child.publicValue);
//        System.out.println(child.privateValue);
        System.out.println(child.protectedValue);
        child.publicMethod();
        child.childMethod();


        System.out.println();
        System.out.println("animal");
        Animal happy = new Animal("happy", 3); // ctrl alt v 변수명 자동 추천
        happy.makeSound();


        System.out.println();
        System.out.println("dog");
        Dog doggy = new Dog("doggy", 3, "puddle");
        System.out.println(doggy.name);
//        System.out.println(doggy.age); // private이라 불가
//        System.out.println(doggy.breed); // private이라 불가
        doggy.makeSound();


        System.out.println();
        System.out.println("cat");
        Cat catty = new Cat("catty", 23);
        System.out.println(catty.name);
//        System.out.println(catty.age);
        catty.makeSound();
        catty.purring();

        System.out.println();
        System.out.println("vehicle");
        Vehicle avante = new Vehicle("Avante");
        avante.increaseSpeed(19);
        System.out.println(avante.speed);
        System.out.println(Vehicle.MAX_FUEL);

        avante.addFuel(200);
        System.out.println(avante.fuel); // 200을 넣어도 100만큼만 돼

        System.out.println();
        System.out.println("bus");
        Bus county = new Bus("County");
        county.increaseSpeed(10);
        System.out.println(county.speed);
        System.out.println(Bus.MAX_FUEL);
        System.out.println(county.addPassenger(3));
        county.addFuel(400); // county의 addfuel실행해-> 없으니까 vehicle꺼 해 => getter 실행해 -> getMaxFuel실행
        System.out.println(county.fuel);


        System.out.println();
        System.out.println("character");

        Character char1 = new Character("char1");
        char1.startFight();
        char1.levelUp(1);
        System.out.println(char1.level);




    }
}
