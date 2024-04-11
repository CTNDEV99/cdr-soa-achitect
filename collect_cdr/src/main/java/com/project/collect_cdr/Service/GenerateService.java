package com.project.collect_cdr.Service;

import com.project.collect_cdr.Model.Abonne;
import com.project.collect_cdr.Model.Cdr;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Date;
import java.util.Random;

@Service
public class GenerateService {
    public List<Cdr> generateCallVoice(List<Abonne> abonnes){
        List<Cdr> cdrs = new ArrayList<>();
        Random random = new Random();
        for (Abonne abonne : abonnes) {
            Cdr cdr = new Cdr();
            //cdr.setDateDeCreation(new Date());
            cdr.setIdEntrant(abonne.getId());
            Abonne dest = abonnes.get(random.nextInt(abonnes.size()));
            cdr.setIdSortant(dest.getId());
            int timeVoice = random.nextInt(60) + 1;
            cdr.setTimeVoice(timeVoice);
            cdrs.add(cdr);
        }

        return cdrs;
    }
}
