package com.project.in_api.Model;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;


@Entity(name = "abprepaid")
@Getter @Setter
@NoArgsConstructor
public class AbPrepaid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_de_creation")
    private Date dateDeCreation;


    private Double r_data;
    private Double r_sms;
    private Double r_voix;
    private Boolean active;

    private int abonneId;

    @PrePersist
    protected void onCreate() {
        dateDeCreation = new Date();
        r_data = 500.00;
        r_sms  = 100.00;
        r_voix = 60.00;

    }


}
