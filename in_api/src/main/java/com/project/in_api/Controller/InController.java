package com.project.in_api.Controller;

import com.project.in_api.Model.AbPrepaid;
import com.project.in_api.Service.InService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class InController {
    @Autowired
    private final InService inService;

    public InController(InService inService) {
        this.inService = inService;
    }
    @GetMapping("/new-connection/{abonneId}")
    public ResponseEntity newConnection(@PathVariable int abonneId) {
        try {
            AbPrepaid abPrepaid = this.inService.newConnection(abonneId);
            return new ResponseEntity<>(abPrepaid, HttpStatus.OK);
        }catch (Exception e){
            return  new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @GetMapping("/termination/{id}")
    public ResponseEntity termination(@PathVariable Long id) {
        try {
            AbPrepaid abPrepaid = this.inService.termination(id);
            return new ResponseEntity<>(abPrepaid, HttpStatus.OK);
        }catch (Exception e){
            return  new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @GetMapping("/query/{abonneId}")
    public ResponseEntity query(@PathVariable int abonneId) {
        try {
            AbPrepaid abPrepaid = this.inService.query(abonneId);
            return new ResponseEntity<>(abPrepaid, HttpStatus.OK);
        }catch (Exception e){
            return  new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


}
