package com.example.server.entities;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="user", schema = "s313304")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "user_id_seq")
    @Column(name = "id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name="password", columnDefinition = "varchar(255) NOT NULL")
    private String password;
    @Column(name="admin_rights", columnDefinition = "boolean")
    private boolean adminRights;

    @Column(name="moder_rights", columnDefinition = "boolean")
    private boolean moderRights;
    @Column(name="username", columnDefinition = "varchar(30) NOT NULL")
    private String username;

    @Column(name="email", columnDefinition = "varchar(255)")
    private String email;

    public UserEntity(String email, String password, String username, boolean adminRights, boolean moderRights){
        this.email = email;
        this.password = password;
        this.username = username;
        this.adminRights = adminRights;
        this.moderRights = moderRights;
    }

    public UserEntity() {

    }
}
