package com.example.server.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="storage", schema = "s313304")
public class StorageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "storage_id_seq")
    @Column(name="id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name="address", columnDefinition = "varchar(100) NOT NULL")
    private String address;

    public StorageEntity(String address){
        this.address = address;
    }

    public StorageEntity(){}
}
