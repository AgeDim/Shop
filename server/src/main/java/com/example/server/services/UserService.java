package com.example.server.services;

import com.example.server.POJO.AuthRequest;
import com.example.server.entities.UserEntity;
import com.example.server.exceptions.UserAlreadyExistsException;
import com.example.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserService {
    @Value("${salt}")
    private String salt;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    public void register(AuthRequest authRequest) throws UserAlreadyExistsException {
        if (userRepository.existsByUsername(authRequest.getUsername())) {
            throw new UserAlreadyExistsException("Username is already in use.");
        }
        if (userRepository.existsByEmail(authRequest.getEmail())){
            throw new UserAlreadyExistsException("Email is already in use.");
        }

        UserEntity user = new UserEntity(authRequest.getEmail(), passwordEncoder.encode(authRequest.getPassword() + salt), authRequest.getUsername(), false, false);
    }
}
