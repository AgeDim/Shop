package com.example.server.entities.products;

import com.example.server.entities.products.enumsForProducts.Color;
import com.example.server.entities.products.enumsForProducts.HookType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="hook", schema = "s313304")
public class HookEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "hook_serial_id_seq")
    @Column(name="serial_id", columnDefinition = "serial primary key")
    private Long serialId;

    @Column(name="name", columnDefinition = "varchar(255) NOT NULL")
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name="hook_type", columnDefinition = "hooks_type NOT NULL")
    private HookType hookType;

    @Column(name="size", columnDefinition = "varchar(5)")
    private String size;

    @Column(name="weight", columnDefinition = "REAL")
    private Double weight;

    @Enumerated(EnumType.STRING)
    @Column(name="color", columnDefinition = "color NOT NULL")
    private Color color;

    @Column(name="default_price", columnDefinition = "money NOT NULL")
    private Double defaultPrice;

    public HookEntity(Long serialId, String name, HookType hookType, String size, Double weight,
                      Color color, Double defaultPrice){
        this.serialId = serialId;
        this.name = name;
        this.hookType = hookType;
        this.size = size;
        this.weight = weight;
        this.color = color;
        this.defaultPrice = defaultPrice;
    }

    public HookEntity(){}
}
