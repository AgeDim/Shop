package com.example.server.services;

import com.example.server.POJO.FavoriteSaveRequest;
import com.example.server.entities.FavoriteEntity;
import com.example.server.entities.UserEntity;
import com.example.server.exceptions.UserNotFoundException;
import com.example.server.repositories.FavoriteRepository;
import com.example.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteService {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Autowired
    private UserRepository userRepository;

    public String addFavoriteToUser(FavoriteSaveRequest request) throws UserNotFoundException {
        UserEntity user = null;
        user = userRepository.findByEmail(request.getUserEmail());
        if (user != null) {
            UserEntity finalUser = user;
            request.getProductIds().forEach(o -> favoriteRepository.save(new FavoriteEntity(finalUser.getId(), o.longValue())));
        } else {
            throw new UserNotFoundException(request.getUserEmail());
        }
        return "Favorite added";
    }

    public List<FavoriteEntity> getFavoriteByUser(String email) throws UserNotFoundException {
        UserEntity user = null;
        user = userRepository.findByEmail(email);
        if (user != null) {
            return favoriteRepository.getFavoriteEntitiesByUserId(user.getId());
        } else {
            throw new UserNotFoundException(email);
        }
    }
}
