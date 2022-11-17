package com.example.server.entities.products;

import com.example.server.entities.products.enumsForProducts.CoilType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="coil", schema = "s313304")
public class CoilEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "coil_serial_id_seq")
    @Column(name="serial_id", columnDefinition = "serial primary key")
    private Long serialId;

    @Column(name="name", columnDefinition = "varchar(255) NOT NULL")
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name="coil_type", columnDefinition = "coil_type NOT NULL")
    private CoilType coilType;

    @Column(name="size", columnDefinition = "INT NOT NULL")
    private Integer size;

    @Column(name="gear_ratio", columnDefinition = "REAL NOT NULL")
    private Double gearRatio;

    @Column(name="friction_brake_force", columnDefinition = "REAL NOT NULL")
    private Double frictionBrakeForce;

    @Column(name="capacity", columnDefinition = "INT NOT NULL")
    private Integer capacity;

    @Column(name="line_diameter", columnDefinition = "REAL NOT NULL")
    private Double lineDiameter;

    @Column(name="default_price", columnDefinition = "money NOT NULL")
    private Double defaultPrice;

    public CoilEntity(Long serialId, String name, CoilType coilType, Integer size, Double gearRatio,
                      Double frictionBrakeForce, Integer capacity, Double lineDiameter, Double defaultPrice){
        this.serialId = serialId;
        this.name = name;
        this.coilType = coilType;
        this.size = size;
        this.gearRatio = gearRatio;
        this.frictionBrakeForce = frictionBrakeForce;
        this.capacity = capacity;
        this.lineDiameter = lineDiameter;
        this.defaultPrice = defaultPrice;
    }

    public CoilEntity(){

    }
}
