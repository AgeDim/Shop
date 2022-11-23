package com.example.server.services;

import com.example.server.POJO.AuthRequest;
import com.example.server.entities.UserEntity;
import com.example.server.exceptions.NotHavePermissionException;
import com.example.server.exceptions.UserAlreadyExistsException;
import com.example.server.exceptions.WrongPasswordException;
import com.example.server.repositories.UserRepository;
import com.example.server.security.Hasher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void register(AuthRequest authRequest) throws UserAlreadyExistsException {
        if (userRepository.existsByEmail(authRequest.getEmail())){
            throw new UserAlreadyExistsException("Email is already in use.");
        }
        UserEntity user = new UserEntity(authRequest.getEmail(),
                Hasher.encryptMD5(authRequest.getPassword()),
                false,
                false);
        userRepository.save(user);
    }

    public void login(AuthRequest authRequest) throws UserAlreadyExistsException, WrongPasswordException {
        if (!userRepository.existsByEmail(authRequest.getEmail())){
            throw new UserAlreadyExistsException("Email not found.");
        }
        UserEntity entity = userRepository.findByEmail(authRequest.getEmail());
        if (!Hasher.encryptMD5(authRequest.getPassword()).equals(entity.getPassword())){
            throw new WrongPasswordException(authRequest.getEmail());
        }
    }

    public void checkModerRights(String email) throws NotHavePermissionException{
        UserEntity entity = userRepository.findByEmail(email);
        if (!entity.isModerRights()){
            throw new NotHavePermissionException(email, "moderator");
        }
    }

    public void checkAdminRights(String email) throws NotHavePermissionException{
        UserEntity entity = userRepository.findByEmail(email);
        if (!entity.isAdminRights()){
            throw new NotHavePermissionException(email, "admin");
        }
    }
}
