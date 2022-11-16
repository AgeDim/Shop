package com.example.server.entities.products;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="flavoring", schema = "s313304")
public class FlavoringEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "flavoring_id_seq")
    @Column(name="id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name="name", columnDefinition = "varchar(255) NOT NULL")
    private String name;

    @Column(name="default_price", columnDefinition = "money NOT NULL")
    private Double defaultPrice;

    public FlavoringEntity(Long id, String name, Double defaultPrice){
        this.id = id;
        this.name = name;
        this.defaultPrice = defaultPrice;
    }

    public FlavoringEntity(){}
}
