package com.example.server.entities;

import com.example.server.entities.enums.ProductType;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "product", schema = "s313304")
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "product_id_seq")
    @Column(name = "id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name = "name", columnDefinition = "varchar(255) NOT NULL")
    private String name;

    @Column(name = "product_type", columnDefinition = "INT NOT NULL")
    private Integer productType;

    @Column(name = "default_price", columnDefinition = "numeric NOT NULL")
    private Double defaultPrice;

    @Column(name = "description", columnDefinition = "json NOT NULL")
    private String description;

    @Column(name = "amount", columnDefinition = "INT NOT NULL")
    private Integer amount;

    @Column(name = "img_name", columnDefinition = "varchar(255) NOT NULL")
    private String imgName;

    @Column(name = "img", columnDefinition = "bytea")
    private byte[] img;

    public ProductEntity(String name, ProductType productType, Double defaultPrice, String description, Integer amount, String imgName, byte[] img) {
        this.name = name;
        this.productType = productType.getCode();
        this.defaultPrice = defaultPrice;
        this.description = description;
        this.amount = amount;
        this.imgName = imgName;
        this.img = img;
    }

    public ProductEntity() {
    }
}
