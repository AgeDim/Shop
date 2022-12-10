package com.example.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalTime;

@Getter
@Setter
@Entity
@Table(name = "shop", schema = "s313304")
public class ShopEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "shop_id_seq")
    @Column(name = "id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name = "address", columnDefinition = "varchar(100) NOT NULL")
    private String address;

    @Column(name = "coefficient", columnDefinition = "real NOT NULL")
    private Double coefficient;

    @Column(name = "time_open", columnDefinition = "time NOT NULL")
    private LocalTime timeOpen;

    @Column(name = "time_close", columnDefinition = "time NOT NULL")
    private LocalTime timeClose;

    public ShopEntity(String address, Double coefficient, LocalTime timeOpen, LocalTime timeClose) {
        this.address = address;
        this.coefficient = coefficient;
        this.timeOpen = timeOpen;
        this.timeClose = timeClose;
    }

    public ShopEntity() {
    }
}
