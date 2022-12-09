package com.example.server.services;

import com.example.server.POJO.FavoriteSaveRequest;
import com.example.server.entities.FavoriteEntity;
import com.example.server.entities.ProductEntity;
import com.example.server.entities.UserEntity;
import com.example.server.exceptions.UserNotFoundException;
import com.example.server.repositories.FavoriteRepository;
import com.example.server.repositories.ProductRepository;
import com.example.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FavoriteService {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    public String addFavoriteToUser(FavoriteSaveRequest request) throws UserNotFoundException {
        UserEntity user = null;
        user = userRepository.findByEmail(request.getEmail());
        if (user != null) {
            UserEntity finalUser = user;
            request.getProductIds().forEach(o -> favoriteRepository.save(new FavoriteEntity(finalUser.getId(), o.longValue())));
        } else {
            throw new UserNotFoundException(request.getEmail());
        }
        return "Favorite added";
    }

    public List<ProductEntity> getFavoriteByUser(String email) throws UserNotFoundException {
        UserEntity user = null;
        user = userRepository.findByEmail(email);
        if (user != null) {
            List<FavoriteEntity> list = favoriteRepository.getFavoriteEntitiesByUserId(user.getId());
            List<ProductEntity> result = new ArrayList<>();
            list.forEach(o->result.add(productRepository.getProductEntityById(o.getProductId())));
            return result;
        } else {
            throw new UserNotFoundException(email);
        }
    }
}
