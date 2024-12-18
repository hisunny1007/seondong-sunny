package org.example.Interfaceprac.library;

public abstract class Material implements Borrowable{
    protected String title;
    protected int ID;
    protected boolean isBorrowed;

    public Material(String title, int ID) {
        this.title = title;
        this.ID = ID;
        this.isBorrowed = false;
    }

    public abstract void download();

    public void locationInfo() {
        System.out.println("location : ");
    }





}
