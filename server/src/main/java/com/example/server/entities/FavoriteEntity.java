package com.example.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "favorite", schema = "s313304")
public class FavoriteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "favorite_id_seq")
    @Column(name="id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name="user_id", columnDefinition = "serial NOT NULL")
    private Long userId;

    @Column(name="product_id", columnDefinition = "serial NOT NULL")
    private Long productId;

    public FavoriteEntity(Long userId, Long productId){
        this.userId = userId;
        this.productId = productId;
    }

    public FavoriteEntity(){}
}
