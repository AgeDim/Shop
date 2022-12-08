package com.example.server.services;

import com.example.server.repositories.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopService {

    @Autowired
    private ShopRepository shopRepository;

    public List<Long> getShopsIdList(){
        return shopRepository.findAllShopsId();
    }
}
