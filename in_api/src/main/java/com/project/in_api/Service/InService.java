package com.project.in_api.Service;

import com.project.in_api.Model.AbPrepaid;
import com.project.in_api.Repository.AbPostpaidRepository;
import com.project.in_api.Repository.AbPrepaidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InService {
    @Autowired
    private final AbPrepaidRepository abPrepaidRepository;

    public InService(AbPrepaidRepository abPrepaidRepository) {
        this.abPrepaidRepository = abPrepaidRepository;
    }

    public AbPrepaid newConnection(int abonneId){
        AbPrepaid abPrepaid = new AbPrepaid();
        abPrepaid.setActive(true);
        abPrepaid.setAbonneId(abonneId);
        return this.abPrepaidRepository.save(abPrepaid);
    }
    public AbPrepaid termination(Long id){
        AbPrepaid abPrepaid = this.abPrepaidRepository.getById(id);
        abPrepaid.setActive(!abPrepaid.getActive());
        return this.abPrepaidRepository.save(abPrepaid);
    }
    public AbPrepaid query(int abonneId){
        Optional<AbPrepaid> abPrepaidOptional = this.abPrepaidRepository.findFirstByAbonneIdOrderByDateDeCreationDesc(abonneId);
        return abPrepaidOptional.orElse(null);
    }

}
