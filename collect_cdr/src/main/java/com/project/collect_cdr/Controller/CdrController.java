package com.project.collect_cdr.Controller;

import com.project.collect_cdr.Model.Abonne;
import com.project.collect_cdr.Model.Cdr;
import com.project.collect_cdr.Service.GenerateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
@RequestMapping("/api")
public class CdrController {
    @Autowired
    private final GenerateService generateService;

    public CdrController(GenerateService generateService) {
        this.generateService = generateService;
    }
    @PostMapping("/generate")
    public ResponseEntity<List<Cdr>> generateCdr(@RequestBody List<Abonne> abonnes) {
        List<Cdr> cdrs = generateService.generateCallVoice(abonnes);
        return ResponseEntity.ok(cdrs);
    }

}
