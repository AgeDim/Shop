package com.example.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "product_shop_match", schema = "s313304")
public class ProductShopMatchEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "product_shop_match_id_seq")
    @Column(name = "id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name = "shop_id", columnDefinition = "serial NOT NULL")
    private Long shopId;

    @Column(name = "product_id", columnDefinition = "serial NOT NULL")
    private Long productId;

    @Column(name = "new_price", columnDefinition = "numeric(10, 2) NOT NULL")
    private Double newPrice;

    @Column(name = "product_amount", columnDefinition = "INT")
    private Integer productAmount;

    public ProductShopMatchEntity(Long shopId, Long productId, Double newPrice, Integer productAmount) {
        this.shopId = shopId;
        this.productId = productId;
        this.newPrice = newPrice;
        this.productAmount = productAmount;
    }

    public ProductShopMatchEntity() {
    }
}
