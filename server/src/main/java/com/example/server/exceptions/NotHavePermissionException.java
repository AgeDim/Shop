package com.example.server.exceptions;

public class NotHavePermissionException extends Exception {

    public NotHavePermissionException(String email, String type){
        super("User with email - " + email + " dont have " + type + "permission.");
    }
}
