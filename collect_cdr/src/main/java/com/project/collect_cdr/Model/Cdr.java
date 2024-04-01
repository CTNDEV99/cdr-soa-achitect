package com.project.collect_cdr.Model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity()
@Getter
@Setter
@NoArgsConstructor
public class Cdr {
    private Date dateDeCreation;
    private Long idEntrant;
    private Long idSortant;
    private int time_voice;

    @PrePersist
    protected void onCreate() {
        dateDeCreation = new Date();


    }
}
