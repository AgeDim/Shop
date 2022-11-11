package com.example.server.entities;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name="user")
public class UserEntity {

    @Id
    @Column(name = "id")
    private Long id;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="username")
    private String username;

    @Column(name="admin_rights")
    private boolean adminRights;

    @Column(name="moder_rights")
    private boolean moderRights;

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
