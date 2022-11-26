package com.example.server.entities;

import com.example.server.entities.enums.ProductType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="product", schema = "s313304")
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "product_id_seq")
    @Column(name = "id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name="name", columnDefinition = "varchar(255) NOT NULL")
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name="product_type", columnDefinition = "product_type NOT NULL")
    private ProductType productType;

    @Column(name="default_price", columnDefinition = "meoney NOT NULL")
    private Double defaultPrice;

    @Column(name="description", columnDefinition = "json NOT NULL")
    private String description;

    @Column(name="amount", columnDefinition = "INT NOT NULL")
    private Integer amount;

    @Column(name="picture_path", columnDefinition = "varchar(255) NOT NULL")
    private String picturePath;

    public ProductEntity(String name, ProductType productType, Double defaultPrice, String description,
                         Integer amount, String picturePath){
        this.name = name;
        this.productType = productType;
        this.defaultPrice = defaultPrice;
        this.description = description;
        this.amount = amount;
        this.picturePath = picturePath;
    }

    public ProductEntity(){}
}
