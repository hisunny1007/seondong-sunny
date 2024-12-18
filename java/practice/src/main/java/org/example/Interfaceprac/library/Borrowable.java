package org.example.Interfaceprac.library;

public interface Borrowable {

    void borrowItem();

    void returnItem();


    // 반납했는지 판단하는 게터같은 느낌
    void isBorrowed();
}
