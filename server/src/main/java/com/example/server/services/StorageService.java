package com.example.server.services;

import com.example.server.repositories.ShopRepository;
import com.example.server.repositories.StorageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StorageService {
    @Autowired
    private StorageRepository storageRepository;

    public List<Long> getShopsIdList(){
        return storageRepository.findAllStoragesId();
    }
}
