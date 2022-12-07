package com.example.server.POJO;

import java.io.File;

public class ProductRequest {

    private String name;

    private Double price;

    private String type;

    private File description;

    private File img;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public File getDescription() {
        return description;
    }

    public void setDescription(File description) {
        this.description = description;
    }

    public File getImg() {
        return img;
    }

    public void setImg(File img) {
        this.img = img;
    }
}
