package com.project.in_api.Model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;


@Entity(name = "abpostpaid")
@Getter @Setter
@NoArgsConstructor
public class AbPostpaid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Boolean active;

    private int abonneId;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_de_creation")
    private Date dateDeCreation;

    @Enumerated(EnumType.STRING)
    private Periode periode;

    @PrePersist
    protected void onCreate() {
        dateDeCreation = new Date();
    }
}
