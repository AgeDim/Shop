package com.example.server.entities;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "user", schema = "s313304", uniqueConstraints = {@UniqueConstraint(columnNames = "email")})
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "user_id_seq")
    @Column(name = "id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name = "password", columnDefinition = "varchar(255) NOT NULL")
    private String password;
    @Column(name = "email", columnDefinition = "varchar(255)")
    private String email;
    @Column(name = "admin_rights", columnDefinition = "boolean")
    private boolean adminRights;

    public UserEntity(String email, String password, boolean adminRights) {
        this.email = email;
        this.password = password;
        this.adminRights = adminRights;
    }

    public UserEntity() {

    }
}
