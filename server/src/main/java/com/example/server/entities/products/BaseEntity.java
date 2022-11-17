package com.example.server.entities.products;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="base", schema = "s313304")
public class BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "base_id_seq")
    @Column(name="id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name="name", columnDefinition = "varchar(255) NOT NULL")
    private String name;

    @Column(name="default_price", columnDefinition = "money NOT NULL")
    private Double defaultPrice;

    public BaseEntity(Long id, String name, Double defaultPrice){
        this.id = id;
        this.name = name;
        this.defaultPrice = defaultPrice;
    }

    public BaseEntity(){}
}
