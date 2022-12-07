package com.example.server.POJO;

import com.example.server.entities.enums.ProductType;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

public class ProductResponse {

    private Long id;

    private String name;

    private ProductType productType;

    private Double defaultPrice;

    private String description;

    private String imgName;

    private byte[] img;

    public ProductResponse(){}

    public ProductResponse(Long id, String name, Integer productType, Double defaultPrice, String description,
                           String imgName, byte[] img){
        this.id = id;
        this.name = name;
        this.productType = ProductType.values()[productType];
        this.defaultPrice = defaultPrice;
        this.description = description;
        this.imgName = imgName;
        this.img = img;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public Double getDefaultPrice() {
        return defaultPrice;
    }

    public void setDefaultPrice(Double defaultPrice) {
        this.defaultPrice = defaultPrice;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImgName() {
        return imgName;
    }

    public void setImgName(String imgName) {
        this.imgName = imgName;
    }

    public byte[] getImg() {
        return img;
    }

    public void setImg(byte[] img) {
        this.img = img;
    }
}
