package com.example.server.POJO;

import org.springframework.web.multipart.MultipartFile;

import java.io.Serializable;

public class ProductRequest implements Serializable {

    private String name;

    private Double price;

    private String type;

    private MultipartFile description;

    private MultipartFile img;


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

    public MultipartFile getDescription() {
        return description;
    }

    public void setDescription(MultipartFile description) {
        this.description = description;
    }

    public MultipartFile getImg() {
        return img;
    }

    public void setImg(MultipartFile img) {
        this.img = img;
    }
}
