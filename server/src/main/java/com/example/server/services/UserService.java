package com.example.server.services;

import com.example.server.POJO.AuthRequest;
import com.example.server.entities.UserEntity;
import com.example.server.exceptions.NotHavePermissionException;
import com.example.server.exceptions.UserAlreadyExistsException;
import com.example.server.exceptions.WrongPasswordException;
import com.example.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Value("${salt_for_db}")
    private String salt;
    @Bean
    private PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    @Autowired
    private UserRepository userRepository;

    public void register(AuthRequest authRequest) throws UserAlreadyExistsException {
        if (userRepository.existsByEmail(authRequest.getEmail())){
            throw new UserAlreadyExistsException("Email is already in use.");
        }

        UserEntity user = new UserEntity(authRequest.getEmail(),
                passwordEncoder().encode(authRequest.getPassword()+salt),
                authRequest.getUsername(),
                false,
                false);
        try{
        userRepository.save(user);
    }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void login(AuthRequest authRequest) throws UserAlreadyExistsException, WrongPasswordException {
        if (userRepository.existsByUsername(authRequest.getUsername())) {
            throw new UserAlreadyExistsException("Username is already in use.");
        }
        if (userRepository.existsByEmail(authRequest.getEmail())){
            throw new UserAlreadyExistsException("Email is already in use.");
        }
        UserEntity entity = userRepository.findByEmail(authRequest.getEmail());
        if (!passwordEncoder().matches(authRequest.getPassword()+salt, entity.getPassword())){
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
