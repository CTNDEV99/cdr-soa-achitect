package com.project.collect_cdr.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity()
@Getter
@Setter
@NoArgsConstructor
public class Abonne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
