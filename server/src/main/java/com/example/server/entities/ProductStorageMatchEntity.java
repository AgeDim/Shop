package com.example.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="product_storage_match", schema = "s313304")
public class ProductStorageMatchEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "product_shop_match_id_seq")
    @Column(name = "id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name="storage_id", columnDefinition = "serial NOT NULL")
    private Long storageId;

    @Column(name="product_id", columnDefinition = "serial NOT NULL")
    private Long productId;

    @Column(name = "product_amount", columnDefinition = "INT")
    private Integer productAmount;

    public ProductStorageMatchEntity(Long storageId, Long productId, Integer productAmount){
        this.storageId = storageId;
        this.productId = productId;
        this.productAmount = productAmount;
    }

    public ProductStorageMatchEntity(){}
}
