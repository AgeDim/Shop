package com.example.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "fish", schema = "s313304")
public class FishEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "fish_id_seq")
    @Column(name="id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name = "name", columnDefinition = "varchar(255) NOT NULL")
    private String name;

    @Column(name="length_max", columnDefinition = "REAL")
    private Double lengthMax;

    @Column(name="length_min", columnDefinition = "REAL")
    private Double lengthMin;

    @Column(name = "weight_max", columnDefinition = "REAL")
    private Double weightMax;

    @Column(name="weight_min", columnDefinition = "REAL")
    private Double weightMin;

    @Column(name="habitat", columnDefinition = "varchar(255)")
    private String habitat;

    public FishEntity(String name, Double lengthMax, Double lengthMin, Double weightMax,
                      Double weightMin, String habitat){
        this.name = name;
        this.lengthMax = lengthMax;
        this.lengthMin = lengthMin;
        this.weightMax = weightMax;
        this.weightMin = weightMin;
        this.habitat = habitat;
    }

    public FishEntity(){}
}
