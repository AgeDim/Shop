package com.example.server.exceptions;

public class WrongPasswordException extends Exception{
    public WrongPasswordException(String username){
        super(username + " has wrong password.");
    }
}
